const UTILS = {
  getLongDate,
  selectText,
  deSelectText
}

export default UTILS

// SELECT TEXT
function selectText (objId) {
  deSelectText()
  if (document.selection) {
    const range = document.body.createTextRange()
    range.moveToElementText(document.getElementById(objId))
    range.select()
  } else if (window.getSelection) {
    const range = document.createRange()
    range.selectNode(document.getElementById(objId))
    window.getSelection().addRange(range)
  }
}

// DE-SELECT TEXT
function deSelectText () {
  if (document.selection) {
    document.selection.empty()
  } else if (window.getSelection) {
    window.getSelection().removeAllRanges()
  }
}

// GET LONG DATE
function getLongDate (source) {
  const baseDate = new Date(source.pubDate)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let dd = baseDate.getDate()
  const mm = months[baseDate.getMonth()]
  const yyyy = baseDate.getFullYear()
  if (dd > 3 && dd < 21) {
    dd += 'th'
  } else {
    switch (dd % 10) {
      case 1: dd += 'st'
        break
      case 2: dd += 'nd'
        break
      case 3: dd += 'rd'
        break
      default: dd += 'th'
    }
  }
  return mm + ' ' + dd + ', ' + yyyy
}

