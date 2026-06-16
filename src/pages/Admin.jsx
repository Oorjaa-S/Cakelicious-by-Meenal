import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/Admin.css";

function Admin() {
    const [session, setSession] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [flavour, setFlavour] = useState("");
    const [image, setImage] = useState(null);


    function handleCategory(value) {
        if (categories.includes(value)) {
            setCategories(
                categories.filter(
                    item => item !== value
                )
            );
        } else {
            setCategories([
                ...categories,
                value
            ]);
        }
    }

    useEffect(() => {
        supabase.auth.signOut();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    async function login() {
        const { error } =
            await supabase.auth.signInWithPassword({
                email,
                password
            });

        if (error) {
            alert(error.message);
            return;
        }
    }

    async function logout() {
        await supabase.auth.signOut();
        alert("Logged Out");
    }

    async function saveCake() {
        if (!image) {
            alert("Please select an image");
            return;
        }

        const fileName =
            `${Date.now()}-${image.name}`;

        const { error: uploadError } =
            await supabase.storage
                .from("cake-images")
                .upload(fileName, image);

        if (uploadError) {
            alert(uploadError.message);
            return;
        }

        const { data: urlData } =
            supabase.storage
                .from("cake-images")
                .getPublicUrl(fileName);

        const { error } =
            await supabase
                .from("cakes")
                .insert({
                    name,
                    description,
                    categories: categories.join(", "),
                    flavour,
                    image_url: urlData.publicUrl
                });

        if (error) {
            alert(error.message);
            return;
        }

        alert("Cake Added!");

        setName("");
        setDescription("");
        setCategories([]);
        setFlavour("");
        setImage(null);
    }

    const inputStyle = {
        width: "100%",
        padding: "14px",
        marginBottom: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontSize: "15px"
    };
    const tagStyle = (item) => ({
        padding: "12px 16px",
        borderRadius: "12px",
        border: "1px solid #C6AC8F",
        background: categories.includes(item)
            ? "#22333B"
            : "#FDFCFA",
        color: categories.includes(item)
            ? "#FFFFFF"
            : "#22333B",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        transition: "0.2s",
        userSelect: "none"
    });

    const tagContainer = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "25px"
    };

    if (!session) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "#FDFCFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "450px",
                        background: "white",
                        padding: "30px",
                        borderRadius: "20px",
                        boxShadow:
                            "0 10px 25px rgba(94,80,63,.15)"
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#22333B",
                            padding: "20px"
                        }}
                    >
                        Admin Login
                    </h1>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                login();
                            }
                        }}
                        className="admin-input"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                login();
                            }
                        }}
                        className="admin-input"
                    />

                    <button
                        onClick={login}
                        className="primary-btn"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#FDFCFA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px"
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    background: "white",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow:
                        "0 10px 25px rgba(94,80,63,.15)"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <h1
                        style={{
                            color: "#22333B"
                        }}
                    >
                        Admin Upload Panel
                    </h1>

                    <button
                        onClick={logout}
                        style={{
                            border: "none",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            background: "#22333B",
                            color: "white",
                            cursor: "pointer"
                        }}
                    >
                        Logout
                    </button>
                </div>

                <input
                    placeholder="Cake Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    className="admin-input"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    style={{
                        ...inputStyle,
                        minHeight: "120px"
                    }}
                />
                
                <h3
  style={{
    color: "#22333B",
    marginBottom: "10px"
  }}
>
  Product Type
</h3>

<div className="tag-container">
  {[
    "Cakes",
    "Cupcakes",
    "Tea Cakes"
  ].map((item) => (
    <label
      key={item}
      className={
        categories.includes(item)
          ? "tag active"
          : "tag"
      }
    >
      <input
        type="checkbox"
        checked={categories.includes(item)}
        onChange={() => handleCategory(item)}
        style={{ display: "none" }}
      />
      {item}
    </label>
  ))}
</div>
<h2
                    style={{
                        color: "#22333B",
                        marginTop: "20px",
                        marginBottom: "15px"
                    }}
                >
                    Categories
                </h2>

                <div className="tag-container">
                    {[
                        "Birthday Cakes",
                        "Kids Birthday",
                        "Anniversary Cakes",
                        "Baby Celebration"
                    ].map((item) => (
                        <label
                            key={item}
                            className={
                                categories.includes(item)
                                    ? "tag active"
                                    : "tag"
                            }
                        >
                            <input
                                type="checkbox"
                                checked={categories.includes(item)}
                                onChange={() => handleCategory(item)}
                                style={{ display: "none" }}
                            />
                            {item}
                        </label>
                    ))}
                </div>

                <h3
                    style={{
                        color: "#22333B",
                        marginBottom: "10px"
                    }}
                >
                    Birthday Tags
                </h3>

                <div className="tag-container">
                    {[
                        "For Him",
                        "For Her",
                        "Sports",
                        "Cars & Vehicles",
                        "Floral Cakes",
                        "Other Cakes"
                    ].map((item) => (
                        <label
                            key={item}
                            className={
                                categories.includes(item)
                                    ? "tag active"
                                    : "tag"
                            }
                        >
                            <input
                                type="checkbox"
                                checked={categories.includes(item)}
                                onChange={() => handleCategory(item)}
                                style={{ display: "none" }}
                            />
                            {item}
                        </label>
                    ))}
                </div>

                <h3
                    style={{
                        color: "#22333B",
                        marginBottom: "10px"
                    }}
                >
                    Kids Birthday Tags
                </h3>

                <div className="tag-container">
                    {[
                        "Superhero",
                        "Princess",
                        "Mermaid",
                        "Disney",
                        "Animals",
                        "Cartoon",
                        "Other Cakes"
                    ].map((item) => (
                        <label
                            key={item}
                            className={
                                categories.includes(item)
                                    ? "tag active"
                                    : "tag"
                            }
                        >
                            <input
                                type="checkbox"
                                checked={categories.includes(item)}
                                onChange={() => handleCategory(item)}
                                style={{ display: "none" }}
                            />
                            {item}
                        </label>
                    ))}
                </div>

                <h3
                    style={{
                        color: "#22333B",
                        marginBottom: "10px"
                    }}
                >
                    Baby Celebration Tags
                </h3>

                <div className="tag-container">
                    {[
                        "Smash Cakes",
                        "6 Month Cakes",
                        "Other Cakes"
                    ].map((item) => (
                        <label
                            key={item}
                            className={
                                categories.includes(item)
                                    ? "tag active"
                                    : "tag"
                            }
                        >
                            <input
                                type="checkbox"
                                checked={categories.includes(item)}
                                onChange={() => handleCategory(item)}
                                style={{ display: "none" }}
                            />
                            {item}
                        </label>
                    ))}
                </div>

                <div
                    style={{
                        background: "#FDFCFA",
                        border: "1px dashed #C6AC8F",
                        padding: "15px",
                        borderRadius: "12px",
                        marginBottom: "25px"
                    }}
                >
                    <strong style={{ color: "#22333B" }}>
                        Selected:
                    </strong>

                    <p
                        style={{
                            color: "#5E503F",
                            marginTop: "8px",
                            marginBottom: 0
                        }}
                    >
                        {categories.length > 0
                            ? categories.join(", ")
                            : "No categories selected"}
                    </p>
                </div>




                <h3 style={{ color: "#22333B" }}>
                    Flavour
                </h3>

                <div className="flavour-grid">
                    {[
                        "Vanilla Cake",
                        "Chocolate Fudge Cake",
                        "Chocolate Mocha Cake",
                        "Chocolate Mousse Cake",
                        "Black Forest Cake",
                        "White Forest Cake",
                        "Butterscotch Cake",
                        "Oreo Cookie Cake",
                        "Nutty Indulgence (Almond) Cake",
                        "Rasmalai Cake",
                        "Strawberry Cake",
                        "Pineapple Cake",
                        "Mango Cake",
                        "Blueberry Cake",
                        "Fresh Fruit Cake"
                    ].map((item) => (
                        <label
                            key={item}
                            className={
                                flavour === item
                                    ? "flavour-option active"
                                    : "flavour-option"
                            }
                        >
                            <input
                                type="radio"
                                name="flavour"
                                value={item}
                                checked={flavour === item}
                                onChange={(e) =>
                                    setFlavour(e.target.value)
                                }
                                style={{ display: "none" }}
                            />

                            {item}
                        </label>
                    ))}
                </div>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setImage(e.target.files[0])
                    }
                    className="file-input"
                />

                <button
                    onClick={saveCake}
                    style={{
                        width: "100%",
                        padding: "15px",
                        border: "none",
                        borderRadius: "12px",
                        background: "#22333B",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    Save Cake
                </button>
            </div>
        </div>
    );
}

export default Admin;