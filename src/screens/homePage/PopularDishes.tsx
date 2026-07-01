
//import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardOverflow } from "@mui/joy";

const list = [
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
    return (
        <div
            className="popular-dishes-frame"
            style={{ width: "100%", background: "#f8f8ff", padding: "40px 0" }}
        >
            <Container maxWidth="lg">
                <Stack
                    className="popular-section"
                    alignItems="center"
                    sx={{ width: "100%" }}
                >
                    <Box
                        className="category-title"
                        sx={{
                            fontFamily: "Roboto Serif",
                            fontSize: "36px",
                            fontWeight: 600,
                            mb: 4,
                            color: "#000",
                        }}
                    >
                        Popular Dishes
                    </Box>

                    { }
                    <Box
                        className="cards-frame"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "24px",
                            width: "100%",
                        }}
                    >
                        {list.map((ele, index) => {
                            return (
                                <CssVarsProvider key={index}>
                                    { }
                                    <Card
                                        sx={{
                                            width: "100%",
                                            minHeight: "380px",
                                            cursor: "pointer",
                                            position: "relative",
                                        }}
                                    >
                                        <CardCover>
                                            <img
                                                src={ele.imagePath}
                                                alt={ele.productName}
                                                loading="lazy"
                                            />
                                        </CardCover>
                                        <CardCover
                                            sx={{
                                                background:
                                                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 150px)",
                                            }}
                                        />
                                        <CardContent sx={{ justifyContent: "flex-end" }}>
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Typography
                                                    level="h2"
                                                    fontSize="lg"
                                                    textColor="#fff"
                                                    mb={1}
                                                >
                                                    {ele.productName}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: "md",
                                                        color: "neutral.300",
                                                        alignItems: "center",
                                                        display: "flex",
                                                    }}
                                                >
                                                    20{" "}
                                                    <VisibilityIcon
                                                        sx={{
                                                            fontSize: 20,
                                                            marginLeft: "5px",
                                                            color: "#fff",
                                                        }}
                                                    />
                                                </Typography>
                                            </Stack>
                                        </CardContent>

                                        <CardOverflow
                                            sx={{
                                                display: "flex",
                                                gap: 1.5,
                                                py: 1.5,
                                                px: "var(--Card-padding)",
                                                borderTop: "1px solid rgba(255,255,255,0.2)",
                                                bgcolor: "rgba(0, 0, 0, 0.5)",
                                            }}
                                        >
                                            <Typography
                                                startDecorator={
                                                    <DescriptionOutlinedIcon sx={{ color: "#fff" }} />
                                                }
                                                textColor="#fff"
                                                fontSize="sm"
                                            >
                                                This is delicious meal
                                            </Typography>
                                        </CardOverflow>
                                    </Card>
                                </CssVarsProvider>
                            );
                        })}
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}