

const categorycontroller = {
    addcategoryPage(req, res) {
        return res.render('./pages/category.ejs');
    },

    async addcategory(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/category/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            });

            const data = await response.json();
            console.log(data);

            return res.redirect("/category/view"); 

        } catch (error) {
            console.log(error.message);
            return res.redirect('./category/view');
        }
    },

    async viewcategory  (req, res)  {

        try {
            const response = await fetch("http://localhost:8081/api/category/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            return res.render("./pages/viewcategory.ejs", {
                categories: data || []
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });

        }
    },
    async  editcategoryPage (req, res) {
        try {
            const response = await fetch(
                `http://localhost:8081/api/category/${req.params.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = await response.json();

            return res.render("pages/editcategory", {
                category: data
            });

        } catch (error) {
            console.log(error);
            return res.send("Error loading edit page");
        }
    },
    async updatecategory(req, res) {
        try {

            let image = req.body.image;
            if (req.file) {
                req.body.image = req.file.path;
            }
            
            await fetch(`http://localhost:8081/api/category/${req.params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            });
            if (req.file && image) {
                fs.unlinkSync(image);
            }
            return res.redirect("/category/view");

        } catch (error) {
            console.log(error);
            return res.send("Error updating category");
        }
    },
};

export default categorycontroller;