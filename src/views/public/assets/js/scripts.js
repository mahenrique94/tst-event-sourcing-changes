const rows = document.querySelectorAll('.row')
if (rows.length > 0) {
  rows.forEach(row => {
    const diffs = Diff.diffWords(row.firstElementChild.textContent, row.lastElementChild.textContent)
    diffs.forEach(diff => {
      if (diff.added) {
        row.lastElementChild.innerHTML = row.lastElementChild.innerHTML.replace(diff.value, `<ins>${diff.value}</ins>`)
      }

      if (diff.removed) {
        row.firstElementChild.innerHTML = row.firstElementChild.innerHTML.replace(diff.value, `<del>${diff.value}</del>`)
      }
    })
  })
}
