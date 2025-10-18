"use client";
import Link from "next/link";
import styles from "./page.module.sass";

import { ContentWrapper } from "@/wrapper/ContentWrapper";
import { Box, CircularProgress, Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "@/themeMui";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper>
        {
          loading ? (
            <Box sx={{
              display: 'flex',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <CircularProgress size={80} sx={{
                justifyContent: 'center',
                color: 'white'
              }} />
            </Box>
          ) : (
            <Grid container spacing={2} columns={12}
              rowSpacing={1}
              sx={{ minWidth: "100%" }}
            >
              <Grid size={{ xs: 2, md: 4 }} offset={{ xs: 2, md: 8 }}>
                <Box className={styles.boxNavbar}>
                  <Link href="/login" onClick={() => setLoading(true)}>Accedi</Link>
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
                    Un'App per sapere quanto guadagnare e, soprattutto, quanto risparmiare
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )
        }
      </ContentWrapper>
    </ThemeProvider>
  );
}
