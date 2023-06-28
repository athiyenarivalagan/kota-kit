import { Input, Form } from 'antd'
// Search is a sub-comp of the Input comp
const { Search } = Input

const SearchInput = ({ projects }) => {
    const onSearch = value => console.log(value)
    // console.log(projects)

    return (
        <Form id="search-form" role="search">
            <Search
                placeholder="Search by clients, projects, or property name"
                onSearch={onSearch}
                // defaultValue={ q }
                name="q"
                style={{ 
                    width: '600px'
                }}
            />
        </Form>
        
    )
}

export default SearchInput