import { allMiaudelos, myMiaudelosId } from "../repository/miaudelos.js"


export async function getAllMiaudelos(req, res){


    try {
        const allMiaus = allMiaudelos()

        const result = allMiaus.rows.map(u => {
            const miaudelos = {
                id: u.productsId,
                name: u.name,
                description: u.description,
                price: u.price,
                type: u.type
            }
            delete miaudelos.userId;
            delete miaudelos.categorieId;

            return miaudelos;
        })
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getMiaudelosId(req, res){

    const { id } = req.params

    try {
        const productId = myMiaudelosId()

        const result = productId.rows.map(u => {
            const obj = {
                id: u.productsId,
                name: u.name,
                description: u.description,
                price: u.price,
                type: u.type
            }
            delete obj.userId;
            delete obj.categorieId;

            return obj;
        })[0]

        if (productId.rowCount === 0) {
            return res.sendStatus(404)
        }
    

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }

}

