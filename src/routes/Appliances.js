import { Breadcrumb, Space, Table } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'


const Appliances = () => {
    const columns = [
        {
          title: 'Fixed Appliances required',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Dimensions',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Item Purchased ?',
          dataIndex: '',
          key: 'x',
          render: () => <a>Send reminder to client</a>,
        },
      ]

      const data = [
        {
          key: 1,
          name: 'Hood',
          age: 'Input Dimensions',
          description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
          key: 2,
          name: 'Hob',
          age: 'Input Dimensions',
          description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
          key: 3,
          name: 'Fridge',
          age: 'Input Dimensions',
          description: 'This not expandable',
        },
        {
          key: 4,
          name: 'Oven',
          age: 'Input Dimensions',
          description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
        {
          key: 5,
          name: 'Built in Microwave',
          age: 'Input Dimensions',
          description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
        {
          key: 6,
          name: '',
          age: '',
          description: '',
        },
      ]

    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: <a href="http://localhost:3000/project/">Spatial Planning</a>,
                    },
                    {
                        title: 'Appliances List',
                    },
                ]}
            />

            <h1><u>Appliances List</u></h1>
            <Space>
                <CheckCircleTwoTone />
                <h3>Appliances List</h3>
            </Space>

            <Table
                columns={columns}
                expandable={{
                expandedRowRender: (record) => (
                    <p
                    style={{
                        margin: 0,
                    }}
                    >
                    {record.description}
                    </p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={data}
            />
        </>
    )
}

export default Appliances