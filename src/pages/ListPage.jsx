import { CheckTree } from 'rsuite';

// Sample Options
const data = [
    {
        "label": "Madhya Pradesh",
        "value": 1,
        "children": [
            {
                "label": "Mhow",
                "value": 2
            },
            {
                "label": "Indore",
                "value": 3,
                "children": [
                    {
                        "label": "Vijay Nagar",
                        "value": 4
                    },
                    {
                        "label": "Rajiv Gandhi Square",
                        "value": 5
                    },
                    {
                        "label": "MR 10",
                        "value": 6
                    },
                ]
            },
        ]
    }
]

const ListPage = () => {
    console.log('');
    return (
        <>
            <CheckTree
                data={data}
                defaultExpandAll
                showIndentLine
            />
        </>
    )
};

export default ListPage;