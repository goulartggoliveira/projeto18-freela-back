import { db } from "../database/database.connection.js"


export function allMiaudelos(userId) {
    const result = db.query(`
    SELECT products.*, categorie_product.* , categories.type, photos.photo
	FROM products
    JOIN categorie_product ON products.id = categorie_product."productsId"
    JOIN categories ON categories.id = categorie_product."categorieId"
	JOIN photos ON products.id = photos."productId"
    WHERE status=true;`)

    return result
}

export function myMiaudelosId(id) {
    const result = db.query(`
    SELECT products.*, categorie_product.*, categories.type
    FROM products
    JOIN categorie_product ON products.id = categorie_product."productsId"
    JOIN categories ON categories.id = categorie_product."categorieId"
    WHERE products.id = $1;`, [id])
    return result
}