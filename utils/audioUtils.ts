
export function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

let activeAudioContext: AudioContext | null = null;

export async function playRawAudio(base64Data: string) {
  try {
    if (!activeAudioContext) {
      activeAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    
    if (activeAudioContext.state === 'suspended') {
      await activeAudioContext.resume();
    }

    const bytes = decodeBase64(base64Data);
    const buffer = await decodeAudioData(bytes, activeAudioContext, 24000, 1);
    
    const source = activeAudioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(activeAudioContext.destination);
    source.start(0);
    
    return new Promise((resolve) => {
      source.onended = resolve;
    });
  } catch (error) {
    console.error("Audio playback failed:", error);
  }
}
