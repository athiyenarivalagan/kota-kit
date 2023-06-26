import { Input, Form } from 'antd'
// Search is a sub-comp of the Input comp
const { Search } = Input

const SearchInput = ({ defaultValue }) => {
    const onSearch = value => console.log(value)
    
    return (
        <Form id="search-form" role="search">
            <Search
                placeholder="Search by clients, projects, or property name"
                onSearch={onSearch}
                defaultValue={ defaultValue }
                name="q"
                style={{ 
                    width: '600px'
                }}
            />
        </Form>
        
    )
}

export default SearchInput