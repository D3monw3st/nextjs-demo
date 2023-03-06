// Next.JS Route
export default function handler(req, res) {
    const {query, method} = req;

    switch (method) {
        case 'GET': 
            const roll =  Math.floor((Math.random() * 6)) + 1
            return res.status(200).json({roll: roll})
        case 'POST':
            return res.status(200).json({msg: "Made from a POST request using SWR!"})
        default: 
            return res.status(200).json({msg: "Some other request"})
    }
}

