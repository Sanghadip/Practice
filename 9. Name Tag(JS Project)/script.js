const name = document.getElementById("name");

// above line target the container input tag who's id is name.

const tagsContainer = document.querySelector(".tags");
//above line target tags class for select query where append tag.

const addName = () => {
  if (name.value === "") {
    return null;
  }
  const tag = document.createElement("div");
  //   create tag function, in this function i create div element then
  // after create div element set attribute class is tag, because
  // css appply on tag class.
  tag.setAttribute("class", "tag");

  tag.innerText = `Hey, I am ${name.value}`;
  //   in this tag function user write text with the help innerText
  // and pass the value with the help of name function.

  tagsContainer.append(tag);
  // with the help of tagsContainer function append tag means
  //  whatever input came this input dump in tags class. which is return in html code.
};
