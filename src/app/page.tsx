"use client";
import Link from "next/link";
import styles from "./page.module.sass";

import { ContentWrapper } from "@/wrapper/ContentWrapper";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "@/themeMui";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper>
        <Grid container spacing={2} columns={12}
          rowSpacing={1}
          sx={{ minWidth: "100%" }}
        >
          <Grid size={{ xs: 2, md: 4 }} offset={{ xs: 2, md: 8 }}>
            <Box className={styles.boxNavbar}>
              <Link href="/home">Home</Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 4, md: 8 }} offset={{ xs: 1, md: 2 }}
            sx={{ gridRow: "1" }}
          >
            <Box className={styles.title}>
              <Typography variant="h1" className={styles.textTitle}>
                Freelance App
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 4, md: 8 }} offset={{ xs: 1, md: 2 }}>
            <Box className={styles.description}>
              <Typography variant="h4" className={styles.textTitle}>
                Un'App per sapere quanto guadagnare e, soprattutto, quanto spendere
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ContentWrapper>
    </ThemeProvider>
  );
}
