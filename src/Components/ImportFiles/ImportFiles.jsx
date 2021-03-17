import React from 'react'
import Files from 'react-files'

var createReactClass = require('create-react-class');
var FilesDemo = createReactClass({
  onFilesChange: function (files) {
    console.log(files)
  },
 
  onFilesError: function (error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  },
 
  render: function() {
    return (
      <div className="files">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['.csv', '.pdf', '.excel']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
            Import
        </Files>
      </div>
    )
  }
})

export default FilesDemo