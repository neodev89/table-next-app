import React, { ReactNode, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

interface tabPanelProps {
    tabsData: Array<{
        label: string;
        value: string;
        children: ReactNode;
    }>;
    currentValue: string;
};

function CustomTabPanel({
    tabsData,
    currentValue,
}: tabPanelProps) {

    return (
        <>
            {
                tabsData.map((item, idx) => {
                    return (
                        <div
                            role="tabpanel"
                            hidden={item.value !== currentValue}
                            id={`simple-tabpanel-${idx}`}
                            aria-labelledby={`simple-tab-${idx}`}
                        >
                            {item.value === currentValue && <Box sx={{ p: 3 }}>{item.children}</Box>}
                        </div>
                    )
                })
            }
        </>
    );
}

const BasicTabs = ({
    tabsData,
    currentValue,
}: tabPanelProps) => {
    const [value, setValue] = useState<string>(tabsData[0].value ?? "");

    const handleChange = (_e: React.SyntheticEvent, currentValue: string) => {
        setValue(currentValue);
    };

    return (
        <Box sx={{
            width: '100%',
            typography: 'body1'
        }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    {
                        tabsData.map((item, idx) => {
                            return (
                                <Tab id={`${idx}`} label={item.label} value={item.value} />
                            )
                        })
                    }
                </Tabs>
                <CustomTabPanel tabsData={tabsData} currentValue={currentValue} />
            </Box>
        </Box>
    );
};

export default BasicTabs;