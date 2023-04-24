import { Input } from 'antd'
const { Search } = Input

// event handler to be updated
const onSearch = (value) => console.log(value)

const SearchInput = () => {
    
    return (
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
                width: 600,
            }}
        />
    )
}

export default SearchInput