import * as React from "react";
import { storiesOf } from '@storybook/react';
import { InputField } from "../atoms/input-field/input-field";

storiesOf('Atoms', module)
    .add('InputField', () => (
        <InputField>Hello Button</InputField>
    ));


