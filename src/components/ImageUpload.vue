<template src="./ImageUpload.html"></template>

<script>
export default {
    data() {
        return {
            dropFiles: []
        }
    },
    methods: {
        deleteDropFile(index) {
            this.dropFiles.splice(index, 1)
        },
        uploadFile() {
let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( '/api/v1/image',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
        }

    }
};
</script>
