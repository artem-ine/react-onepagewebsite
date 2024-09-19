const serializer = (type, element, content, children) => {
  const toPigLatin = (text) => {
    return text.split(' ').map(word => {
      const firstVowelIndex = word.search(/[aeiouAEIOU]/);
      if (firstVowelIndex === 0) {
        return word + 'way'; 
      }
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay'; 
    }).join(' ');
  };
  
  if (element.type === 'heading1') {
    const pigLatinContent = toPigLatin(children);
    console.log(pigLatinContent)
    return `<h1>${pigLatinContent}</h1>`;
  }
  
  if (element.type === 'preformatted') {
    return `<code>${children}</code>`;
  }
  
  return null;
};

export default serializer;