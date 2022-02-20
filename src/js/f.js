/* DOM naming, attributes and others */

const div = 'div';
const p = 'p';
const img = 'img'
const empty = '';
const cardClassName = 'p-card';
const rowClassName = 'row';
const cardImageClassName = 'p-card-img';
const colTitleClassName = 'block';
const cardTitleClassName = 'p-card-body';
const onclickAttr = 'onclick';
const insertPosition = 'beforeend';
// First era block ID and part of class name.
const firstEraName = 'first-era';
// Second era block ID and part of class name.
const secondEraName = 'second-era';
// Third era block ID and part of class name.
const thirdEraName = 'third-era';
// Picked profession block ID.
const pickedIdName = 'picked';

/* Card's class name */

const firstEraCardClassName = cardClassName + ' ' + firstEraName;
const secondEraCardClassName = cardClassName + ' ' + secondEraName;
const thirdEraCardClassName = cardClassName + ' ' + thirdEraName;

/* Arrays settings */

const emptyArray = 0;
const firstEraId = 1;
const firstEraArrayIndex = 0;
const secondEraId = 2;
const secondEraArrayIndex = 1;
const thirdEraId = 3;
const thirdEraArrayIndex = 2;
const firstElementArrayIndex = 0;

/* Func names */

const addProfessionFuncName = 'addProfession(this)';
const deleteProfessionFuncName = 'deleteProfession(this)';
const clearAllFuncName = 'clearAll()';

// TODO: Change before deploying!

// First part of url to images.
const baseUrl = '../src/icons/';

/* Variables */

// Picked professions by user.
let user = [];
// List of available professions.
let availableProfessions = [];

/* Actions */

// ACTION: Add profession to user list and initialize redraw.
function addProfession(element) {
  let profession = availableProfessions.find(p => p.id.toString() === element.id)
  user.push(profession);
  redrawUserPickedBlock();
  refreshAvailableProfessions(profession, true);
  redrawAvailableBlock();
}

// ACTION: Delete profession from user list and initialize redraw.
function deleteProfession(element) {
  let profession = user.find(p => p.id.toString() === element.id)
  user = user.filter(p => p.id !== profession.id);
  redrawUserPickedBlock();
  refreshAvailableProfessions(profession, false);
  redrawAvailableBlock();
}

/* Functions */

// Start up func aka hello world.
function initializeApplication() {
  availableProfessions = data;
  redrawAvailableBlock();
}

// Initialize redrawing picked professions by user block.
function redrawUserPickedBlock() {
  let sortedProfessions = sortProfessionsByEra(user);
  let redrawStarted = false;

  sortedProfessions.forEach(function (group) {
    if (redrawStarted) {
      refreshProfessionsBlock(group, pickedIdName, false, false);
    } else {
      refreshProfessionsBlock(group, pickedIdName, true, false);
      redrawStarted = true;
    }
  });
}

// Initialize redrawing available professions block.
function redrawAvailableBlock() {
  let sortedProfessions = sortProfessionsByEra(availableProfessions);
  clearAvailableBlockData(sortedProfessions);
  sortedProfessions.forEach(function (group) {
    if (group.length === emptyArray) return;
    let groupEra = group[firstElementArrayIndex]?.era;
    let targetClassName = getEraClassNameForCard(groupEra, false);
    refreshProfessionsBlock(group, targetClassName);
  })
}

// Clear eras block if available array is null.
function clearAvailableBlockData(sortedProfessions) {
  if (sortedProfessions[firstEraArrayIndex].length === emptyArray) getTargetDOMElement(firstEraName, true);
  if (sortedProfessions[secondEraArrayIndex].length === emptyArray) getTargetDOMElement(secondEraName, true);
  if (sortedProfessions[thirdEraArrayIndex].length === emptyArray) getTargetDOMElement(thirdEraName, true);
}

// Sort all professions by era.
function sortProfessionsByEra(source) {
  let firstEraList = source.filter(profession => profession?.era === firstEraId).sort(p => p.id);
  let secondEraList = source.filter(profession => profession?.era === secondEraId).sort(p => p.id);
  let thirdEraList = source.filter(profession => profession?.era === thirdEraId).sort(p => p.id);

  return [firstEraList, secondEraList, thirdEraList];
}

// Source - professions list for rendering.
// Target - Id of DOM element for rendering.
function refreshProfessionsBlock(source, target, eraseInnerHtml = true, addingFunctionMode = true) {
  if (target === undefined || target === null ) return;
  let targetDOMElement = getTargetDOMElement(target, eraseInnerHtml);
  
  if (source.length === emptyArray) return;
  
  source.forEach(function (profession) {
    let cardDOMElement = createCard(profession, addingFunctionMode);
    targetDOMElement.insertAdjacentElement(insertPosition, cardDOMElement);
  })
}

// Find DOM element by ID and clear inner HTML.
function getTargetDOMElement(target, eraseInnerHtml) {
  let targetDOMElement = document.getElementById(target);
  if (eraseInnerHtml) {
    targetDOMElement.innerHTML = empty;
  }
  return targetDOMElement;
}

// Create block with card
function createCard(profession, addingFunctionMode) {
  let rootCardDivDOMElement = document.createElement(div);

  let rowDivDOMElement = document.createElement(div);

  let cardImageColDOMElement = document.createElement(div);
  let cardImageDOMElement = document.createElement(img);

  let cardTitleColDOMElement = document.createElement(div);
  let cardTitleDivDOMElement = document.createElement(div);
  let cardTitleParaDOMElement = document.createElement(p);

  cardTitleParaDOMElement.innerText = profession.title;
  cardTitleDivDOMElement.className = cardTitleClassName;
  cardTitleDivDOMElement.insertAdjacentElement(insertPosition, cardTitleParaDOMElement);
  cardTitleColDOMElement.className = colTitleClassName;
  cardTitleColDOMElement.insertAdjacentElement(insertPosition, cardTitleDivDOMElement);

  cardImageDOMElement.src = createImagePath(profession.iconName);
  cardImageDOMElement.alt = profession.title;
  cardImageColDOMElement.className = cardImageClassName;
  cardImageColDOMElement.insertAdjacentElement(insertPosition, cardImageDOMElement);

  rowDivDOMElement.className = rowClassName;
  rowDivDOMElement.insertAdjacentElement(insertPosition, cardImageColDOMElement);
  rowDivDOMElement.insertAdjacentElement(insertPosition, cardTitleColDOMElement);

  rootCardDivDOMElement.className = getEraClassNameForCard(profession.era);
  rootCardDivDOMElement.setAttribute(onclickAttr, addingFunctionMode ? addProfessionFuncName : deleteProfessionFuncName);
  rootCardDivDOMElement.id = profession.id;
  rootCardDivDOMElement.insertAdjacentElement(insertPosition, rowDivDOMElement);

  return rootCardDivDOMElement;
}

// Return class name depending on item era.
function getEraClassNameForCard(era, availableRenderingMode = true) {
  switch (era) {
    case firstEraId:
      return availableRenderingMode ? firstEraCardClassName : firstEraName;
    case secondEraId:
      return availableRenderingMode ? secondEraCardClassName : secondEraName;
    case thirdEraId:
      return availableRenderingMode ? thirdEraCardClassName : thirdEraName;
    case null:
      return empty;
  }
}

// Return relative path to image.
function createImagePath(path) {
  return baseUrl + path;
}

// Refresh list of available professions depending on onclick action.
function refreshAvailableProfessions(profession, addingFunctionMode) {
  if (user.length === emptyArray) {
    availableProfessions = data;
    return;
  }

  if (addingFunctionMode) {
    profession.exclusion.forEach(function (id) {
      availableProfessions = availableProfessions.filter(p => p.id !== id);
    });
  } else {
    profession.exclusion.forEach(function (id){
      let excludedProfession = data.find(p => p.id === id);
      availableProfessions.push(excludedProfession);
    });
  }
}