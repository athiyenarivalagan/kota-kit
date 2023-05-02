import { Input } from 'antd'
const { Search } = Input


const SearchInput = () => {
    const onSearch = value => console.log(value)
    
    return (
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ 
                // width: '100%'
                width: '600px'
            }}
            className='custom-search'
        />
    )
}

export default SearchInput