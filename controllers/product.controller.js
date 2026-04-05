import fs from 'fs';

const productController = {

    // 🔹 ADD PRODUCT PAGE
    addproductPage: async (req, res) => {
        const categories = await fetch("http://localhost:8081/api/category/");
        const subcategories = await fetch("http://localhost:8081/api/subcategory");
        const extraCategories = await fetch("http://localhost:8081/api/extracategory");

        const categoriesData = await categories.json();
        const subcategoriesData = await subcategories.json();
        const extraCategoriesData = await extraCategories.json();

        return res.render("./pages/product.ejs", {
            categories: categoriesData,
            subcategories: subcategoriesData,
            extraCategories: extraCategoriesData
        });
    },

    // 🔹 ADD PRODUCT
    addProduct: async (req, res) => {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            await fetch('http://localhost:8081/api/product/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body),
            });

            return res.redirect('/product/view');

        } catch (error) {
            console.log(error.message);
            return res.redirect('/product/view');
        }
    },

    // 🔹 VIEW PRODUCTS
    viewProducts: async (req, res) => {
        const response = await fetch("http://localhost:8081/api/product/");
        const data = await response.json();

        return res.render("./pages/viewproduct.ejs", {
            products: data,
        });
    },

    // 🔹 EDIT PRODUCT PAGE
    editproductPage: async (req, res) => {
        try {
            const { id } = req.params;

            const productResponse = await fetch(`http://localhost:8081/api/product/${id}`);
            const data = await productResponse.json();

            const categories = await fetch("http://localhost:8081/api/category/");
            const subcategories = await fetch("http://localhost:8081/api/subcategory");
            const extraCategories = await fetch("http://localhost:8081/api/extracategory");

            const categoriesData = await categories.json();
            const subcategoriesData = await subcategories.json();
            const extraCategoriesData = await extraCategories.json();

            return res.render("./pages/editproduct", {
                product: data.product,   // ✅ IMPORTANT FIX
                categories: categoriesData,
                subcategories: subcategoriesData,
                extraCategories: extraCategoriesData
            });

        } catch (error) {
            console.log("ERROR:", error.message);
            return res.send("Error fetching product");
        }
    },

    // 🔹 UPDATE PRODUCT
    updateproduct: async (req, res) => {
        try {
            const { id } = req.params;

            // 🔥 Get old product
            const productResponse = await fetch(`http://localhost:8081/api/product/${id}`);
            const productData = await productResponse.json();

            let oldImage = productData.product.image;

            // 🔥 If new image uploaded
            if (req.file) {
                req.body.image = req.file.path;

                // delete old image safely
                if (oldImage && fs.existsSync(oldImage)) {
                    fs.unlinkSync(oldImage);
                }
            } else {
                req.body.image = oldImage;
            }

            // 🔥 Update product
            await fetch(`http://localhost:8081/api/product/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });

            return res.redirect('/product/view'); 

        } catch (error) {
            console.log("ERROR:", error.message);
            return res.send("Error updating product");
        }
    },

    // 🔹 DELETE PRODUCT
    deleteproduct: async (req, res) => {
        try {
            const { id } = req.params;

            await fetch(`http://localhost:8081/api/product/${id}`, {
                method: "DELETE"
            });

            return res.redirect('/product/view');

        } catch (error) {
            console.log(error);
            return res.send("Error deleting product");
        }
    }
};

export default productController;