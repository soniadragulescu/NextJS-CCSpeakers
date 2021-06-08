import React from 'react'
import App from '../src/App'
import path from 'path'
import fs from 'fs';

export async function getServerSideProps() {
  const { promisify } = require('util');
  const readFile = promisify(fs.readFile);
  const jsonFile = path.resolve('./', 'db.json');
  let initialSpeakerData;

  try {
    const readFileData = await readFile(jsonFile);
    initialSpeakerData = JSON.parse(readFileData).speakers;

  } catch (e) {
    console.log('/api/speakers error: ', e)
  }

  return {
    props: {initialSpeakerData}
  }

}

function speakers({initialSpeakerData}) {
  return <App pageName='Speakers' />
}

export default speakers
