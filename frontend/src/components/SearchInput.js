import { Input, Space } from 'antd'
const { Search } = Input

const onSearch = (value) => console.log(value) // update

const SearchInput = () => {
    return (
        <Space direction="vertical">
            <Search
                placeholder="search project ..."
                onSearch={onSearch}
                style={{
                width: 600,
                }}
            />
        </Space>
    )
}

export default SearchInput