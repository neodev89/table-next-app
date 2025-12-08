import React, { ReactNode, useState } from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";

interface tabPanelProps {
    tabsData: Array<{
        label: string;
        value: string;
        children: ReactNode;
    }>;
    currentValue: string;
    value?: string;
    setValue?: (value: string) => void;
};

function CustomTabPanel({
    tabsData,
    currentValue,
}: tabPanelProps) {

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
            typography: 'body1',
            border: "2px solid green",
        }}>
            {
                tabsData.map((item, idx) => {
                    return (
                        <Box component="div"
                            role="tabpanel"
                            hidden={item.value !== currentValue}
                            id={`simple-tabpanel-${idx}`}
                            aria-labelledby={`simple-tab-${idx}`}
                        >
                            {item.value === currentValue && <Box sx={{ p: 3 }}>{item.children}</Box>}
                        </Box>
                    )
                })
            }
        </Box>
    );
}

const BasicTabs = ({
    tabsData,
    currentValue,
    value,
    setValue,

}: tabPanelProps) => {

    const handleChange = (_e: React.SyntheticEvent, currentValue: string) => {
        setValue?.(currentValue);
    };

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
            typography: 'body1',
            border: "2px solid violet",
        }}>

            <Stack spacing={1} sx={{
                alignItems: "center",
            }}>
                <Tabs value={value} onChange={handleChange}>
                    {
                        tabsData.map((item, idx) => {
                            return (
                                <Tab
                                    id={`${idx}-${item.value}`}
                                    label={item.label}
                                    value={item.value}
                                />
                            )
                        })
                    }
                </Tabs>
                <CustomTabPanel
                    tabsData={tabsData}
                    currentValue={currentValue}
                />
            </Stack>
        </Box>
    );
};

export default BasicTabs;