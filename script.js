function countCharacters() {
  const input = document.getElementById("inputText").value;
  const trimmed = input.trim();
  const length = trimmed.length;
  document.getElementById("result").textContent = `Character count: ${length}`;
}
