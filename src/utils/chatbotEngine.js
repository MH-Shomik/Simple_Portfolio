/**
 * Client-side ML Chatbot Engine
 * Algorithm: TF-IDF vectorization + Cosine Similarity
 * No external API · No server · Runs entirely in the browser
 */

const STOPWORDS = new Set([
  'a','an','the','is','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall','can',
  'to','of','in','for','on','with','at','by','from','about','as','into','through',
  'i','me','my','myself','we','our','you','your','he','him','his','she','her','it',
  'its','they','them','their','what','which','who','this','that','these','those',
  'and','but','if','or','tell','please','hey','hi','hello','thanks','thank','just',
  'so','very','really','quite','also','any','all','both','some','other','then',
  'than','when','where','how','why','there','here','no','not','am','get','give',
  'know','want','need','uh','um','ok','okay','sure','well','like','up','out',
])

/** Lowercase, strip punctuation, split, remove stopwords */
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOPWORDS.has(w))
}

/** Term-frequency map for a token array */
function termFrequency(tokens) {
  const freq = {}
  tokens.forEach(t => { freq[t] = (freq[t] || 0) + 1 })
  const total = tokens.length || 1
  Object.keys(freq).forEach(k => { freq[k] /= total })
  return freq
}

/** Inverse document frequency over a list of tokenized docs */
function computeIDF(vocab, tokenizedDocs) {
  const N = tokenizedDocs.length
  const idf = {}
  vocab.forEach(term => {
    const df = tokenizedDocs.filter(doc => doc.includes(term)).length
    idf[term] = Math.log((N + 1) / (df + 1)) + 1      // smoothed IDF
  })
  return idf
}

/** Build a TF-IDF vector aligned to vocab */
function tfidfVector(tokens, vocab, idf) {
  const tf = termFrequency(tokens)
  return vocab.map(term => (tf[term] || 0) * (idf[term] || 1))
}

/** Cosine similarity between two equal-length vectors */
function cosineSimilarity(a, b) {
  let dot = 0, magA = 0, magB = 0
  for (let i = 0; i < a.length; i++) {
    dot  += a[i] * b[i]
    magA += a[i] * a[i]
    magB += b[i] * b[i]
  }
  if (magA === 0 || magB === 0) return 0
  return dot / (Math.sqrt(magA) * Math.sqrt(magB))
}

/**
 * Build the chatbot engine from an array of intent objects.
 * Each intent: { tag, patterns: string[], answers: string[] }
 *
 * Returns an object with a query(input) method that returns the
 * best-matching answer string, or null if confidence is too low.
 */
export function buildEngine(intents) {
  // Merge all patterns per intent into one "document"
  const tokenizedDocs = intents.map(intent =>
    intent.patterns.flatMap(p => tokenize(p))
  )

  // Global vocabulary from all training documents
  const vocabSet = new Set()
  tokenizedDocs.forEach(doc => doc.forEach(t => vocabSet.add(t)))
  const vocab = Array.from(vocabSet)

  const idf = computeIDF(vocab, tokenizedDocs)

  // Pre-compute TF-IDF vectors for every intent (done once at build time)
  const intentVectors = tokenizedDocs.map(doc => tfidfVector(doc, vocab, idf))

  return {
    query(input) {
      const queryTokens = tokenize(input)
      if (queryTokens.length === 0) return null

      const queryVec = tfidfVector(queryTokens, vocab, idf)

      let bestScore = -1
      let bestIndex = -1

      intents.forEach((_, i) => {
        const score = cosineSimilarity(queryVec, intentVectors[i])
        if (score > bestScore) {
          bestScore = score
          bestIndex = i
        }
      })

      // Confidence threshold — below this, return null (triggers fallback)
      if (bestScore < 0.10) return null

      const answers = intents[bestIndex].answers
      return answers[Math.floor(Math.random() * answers.length)]
    },
  }
}
