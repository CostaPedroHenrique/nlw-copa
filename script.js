let isIgnite = true
function changeCard(event) {
  const card = event.currentTarget
  const backgroundImage = isIgnite
    ? 'url(./assets/bg-explorer.svg)'
    : 'url(./assets/bg-ignite.svg)'
  isIgnite = !isIgnite
  card.style.backgroundImage = backgroundImage
}

function downloadURI(uri, name) {
  var link = document.createElement('a')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  delete link
}

function exportImage() {
  domtoimage
    .toPng(document.getElementById('my-card'), {
      style: {
        left: '0px'
      }
    })
    .then(function (dataUrl) {
      var img = new Image()
      img.src = dataUrl
      downloadURI(dataUrl, 'copa.png')
    })
}

function passFileUrl() {
  document.getElementById('asgnmnt_file').click()
}

function fileSelected(inputData) {
  document.getElementById('asgnmnt_file_img').src = window.URL.createObjectURL(
    inputData.files[0]
  )
}
