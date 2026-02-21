/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // Step 1: Validate input
  if (typeof title !== 'string') {
    return "";
  }
  
  const trimmedTitle = title.trim();
  
  if (trimmedTitle === "") {
    return "";
  }
  
  // Step 2: Define small words that should be lowercase
  const smallWords = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];
  
  // Step 3: Split the title into words and clean up extra spaces
  const words = trimmedTitle.split(/\s+/);
  
  // Step 4: Map each word to Title Case, with exceptions for small words
  const fixedWords = words.map((word, index) => {
    const lowerWord = word.toLowerCase();
    
    if (smallWords.includes(lowerWord) && index !== 0) {
      return lowerWord; // Keep small words lowercase unless it's the first word
    }
    
    // Convert to Title Case
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  
  // Step 5: Join the fixed words with a single space
  return fixedWords.join(" ");
}
