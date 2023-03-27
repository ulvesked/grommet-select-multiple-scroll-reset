import React, { useCallback, useState } from 'react';

import { Box, Button, Form, FormField, SelectMultiple } from 'grommet';

const dummyOptions = Array(2000)
    .fill(undefined)
    .map((_, i) => `option ${i}`)
    .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
    );

export const InsideFormField = () => {

    return (
        // Uncomment <Grommet> lines when using outside of storybook
        // <Grommet theme={...}>
        <Box align="center" pad="large">
            <FormField label="Label" name="select">
                <SelectMultiple
                    showSelectedInline
                    name="select"
                    placeholder="placeholder"
                    options={dummyOptions}
                />
            </FormField>
            <Button type="submit" label="Update" primary />
        </Box>
        // </Grommet>
    );
};
