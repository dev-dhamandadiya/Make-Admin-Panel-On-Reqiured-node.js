import fs from "fs";

const subcategorycontroller = {

    // 👉 Load Add Page
    addsubcategoryPage(req, res) {
        return res.render('pages/subcategory');
    },

    async subaddcategory(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/subcategory/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            });

            const data = await response.json();
            console.log("ADD RESPONSE:", data);

            return res.redirect('/subcategory/view');

        } catch (error) {
            console.log("ADD ERROR:", error.message);
            return res.redirect('/subcategory/view');
        }
    },

    // 👉 View Subcategories
    async subviewcategory(req, res) {
        try {
            const response = await fetch('http://localhost:8081/api/subcategory/', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            return res.render('pages/viewsubcategory', {
                categories: data || []
            });

        } catch (error) {
            console.log("VIEW ERROR:", error.message);
            return res.send("Error loading subcategories");
        }
    },

    async subeditcategoryPage(req, res) {
        try {
            const id = req.params.id;
            const response = await fetch(
                `http://localhost:8081/api/subcategory/${req.params.id}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            const data = await response.json();

            return res.render('pages/editsubcategory', {
                subcategory: data
            });

        } catch (error) {
            console.log("EDIT PAGE ERROR:", error.message);
            return res.send("Error loading edit page");
        }
    },

    async subupdatecategory(req, res) {
        try {
            let oldImage = req.body.image;

            if (req.file) {
                req.body.image = req.file.path;
            }

            await fetch(
                `http://localhost:8081/api/subcategory/${req.params.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req.body)
                }
            );

            // 👉 delete old image if new uploaded
            if (req.file && oldImage) {
                fs.unlinkSync(oldImage);
            }

            return res.redirect('/subcategory/view');

        } catch (error) {
            console.log("UPDATE ERROR:", error.message);
            return res.send("Error updating subcategory");
        }
    },

};

export default subcategorycontroller;