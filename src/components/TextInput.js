import { Input } from 'antd'
const { TextArea } = Input

const onChange = (e) => {
  console.log('Change:', e.target.value)
};
const TextInput = () => {
    return (
        <div>
            <TextArea
            showCount
            maxLength={100}
            style={{
                height: 120,
                marginBottom: 24,
            }}
            onChange={onChange}
            placeholder="can resize"
            />
        </div>
    )
}

export default TextInput
  