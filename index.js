function searchWordInSentence(sentence, word) {
    if (typeof sentence !== "string" || typeof word !== "string") {
        throw new Error("typeOf your sentence or word is not string!")
    }

    return sentence.includes(word)
}

const sentence = prompt("input your sentence")
const word = prompt("input your word")

try {
    const result = searchWordInSentence(sentence, word)
    console.log(result ? "word found!" : "word not found!")
} catch (error) {
    console.error(error.message)
}
