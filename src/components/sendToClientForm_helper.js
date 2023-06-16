// For Upload component: prevents the default auto-upload & sets form state.
export const props = (form, setForm) => ({
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload: (file) => {
        setForm({
            ...form,
            file
        })
        return false
    }
  })

export const initializeFormData = (name, projectId, file) => {
    const formData = new FormData()

    formData.append("name", name)
    formData.append("projectId", projectId)
    formData.append("file", file)

    return formData
}

export const initialFormValue = {
    clientName: '', 
    emailAddress:'', 
    file: new Blob()
}