import { Input, Form } from 'antd'
// Search is a sub-comp of the Input comp
const { Search } = Input

const SearchInput = ({ projects }) => {
    const onSearch = value => console.log(value)
    // console.log(projects)

    return (
        <Form id="search-form" role="search">
            <Search
                id="q"
                aria-label="Search projects"
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                // defaultValue={ q }
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