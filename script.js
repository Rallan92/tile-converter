function tilesToFeet() {
  const tilesWidth = parseInt(document.getElementById('tilesWidth').value);
  const tilesDepth = parseInt(document.getElementById('tilesDepth').value);

  const ftWidth = (tilesWidth * 32) / 12;
  const ftDepth = (tilesDepth * 32) / 12;

  document.getElementById('tilesToFeetResult').innerText =
    `Width: ${ftWidth.toFixed(2)} feet\nLength: ${ftDepth.toFixed(2)} feet`;
}

function metresToTiles() {
  const mWidth = parseFloat(document.getElementById('metreWidth').value);
  const mLength = parseFloat(document.getElementById('metreLength').value);

  const tileWidth = (mWidth * 3.281) * 12 / 32;
  const tileLength = (mLength * 3.281) * 12 / 32;

  const widthRounded = Math.round(tileWidth);
  const lengthRounded = Math.round(tileLength);

  document.getElementById('metresToTilesResult').innerText =
    `Width: ${widthRounded} tiles\nLength: ${lengthRounded} tiles`;
}
