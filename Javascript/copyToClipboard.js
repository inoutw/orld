const copyToClipboard = (content) => {
  const textarea = document.createElement("textarea");

  textarea.value = content;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("Copy");
  textarea.remove();
};
