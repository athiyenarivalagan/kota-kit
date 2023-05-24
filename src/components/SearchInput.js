import { Input, Form } from 'antd'
// Search is a sub-comp of the Input comp
const { Search } = Input

const SearchInput = ({ defaultValue }) => {
    const onSearch = value => console.log(value)
    
    return (
        <Form id="search-form" role="search">
            <Search
                id="q"
                placeholder="input search text"
                // allowClear
                onSearch={onSearch}
                defaultValue={ defaultValue }
                name="q"
                style={{ 
                    width: '600px'
                }}
            />
        {/* <div id="search-spinner" aria-hidden hidden={true} /> */}
        </Form>
        
    )
}

export default SearchInput