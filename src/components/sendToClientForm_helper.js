import { message, Upload } from "antd"
// For Upload component: prevents the default auto-upload & sets form state.
export const props = (form, setForm) => ({
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload: (file) => {
        const isAllowedType = ['image/png', 'application/pdf', 'image/jpeg'].includes(file.type)
        if (!isAllowedType) {
            message.error(`Only PNG, JPEG, or PDF files are allowed.`)
            return Upload.LIST_IGNORE
        }
        setForm({
            ...form,
            file
        })
        return false // Default uploading (to action url) stopped if return false. 
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
    clientName: null, 
    emailAddress: null, 
    file: null
}