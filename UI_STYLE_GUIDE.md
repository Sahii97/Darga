
# Kurd Lingo UI Implementation Guide

## 1. Theme Strategy: Brown & Black
To maintain visual hierarchy without contrast issues:
- **Background**: Use `#121212` as the primary dark surface.
- **Surface Accents**: Use `#1E1E1E` (elevation 1) for cards to create separation.
- **Primary Action**: `#8D6E63` (Bronze/Brown). Use this for high-impact buttons.
- **Typography**: Text is predominantly `#FFFFFF` (pure white) or `#E0E0E0` (off-white) for body text to reduce eye strain.

## 2. Bidirectional Layout (LTR vs RTL)
The application dynamically toggles the `dir` attribute based on the `nativeLanguage` selection.
- If `nativeLanguage` is English: Root element uses `ltr-layout`.
- If `nativeLanguage` is Arabic or Sorani: Root element uses `rtl-layout`.

### Tailwind Helper
```css
.rtl-layout { direction: rtl; text-align: right; }
.ltr-layout { direction: ltr; text-align: left; }
```

## 3. Typography
We utilize **IBM Plex Sans Arabic** for all languages. This ensures that the Sorani and Arabic scripts are rendered with professional calligraphic weight rather than default system fonts.

## 4. Content Mapping (Logic)
Content is stored as objects containing keys for all three languages. 
Mapping function:
```typescript
const getTranslation = (item: Content, lang: 'english' | 'arabic' | 'sorani') => {
  return item[`word_${lang}`];
}
```
If User speaks English and learns Sorani:
- **Question**: `item.word_english`
- **Answer Options**: Array including `item.word_sorani`
