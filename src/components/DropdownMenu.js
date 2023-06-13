import { Dropdown } from 'antd'
import { WhatsAppOutlined, MailTwoTone, EllipsisOutlined } from '@ant-design/icons'

const DropdownMenu = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/project/">
              Set as Final Draft
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/project/">
              Send via Whatsapp
            </a>
          ),
          icon: <WhatsAppOutlined />,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/project/">
              Send via Gmail
            </a>
          ),
          icon: <MailTwoTone />
        },
    ]


    return (
        <Dropdown
            menu={{
            items,
            }}
        >
            <EllipsisOutlined />
        </Dropdown>
    )
}

export default DropdownMenu