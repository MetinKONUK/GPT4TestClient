/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';

const OpenAIParameterDialog = ({ modelData }) => {
    const {
        LLMName,
        id,
        modelSelection,
        temperature,
        maxLength,
        stopSequences,
        topP,
        frequencyPenalty,
        presencePenalty,
    } = modelData;
    const renderParameterValueMatch = (name, value) => {
        return (
            <>
                <Grid item xs={6} sx={{ mb: 2 }}>
                    <Typography
                        sx={{
                            backgroundColor: '#e65100',
                            color: '#eeeeee',
                            height: '3em',
                            border: '2px solid #212121',
                            borderRight: 'none',
                        }}
                        alignContent={'center'}
                        textAlign={'center'}
                    >
                        {name.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography
                        textAlign={'center'}
                        alignContent={'center'}
                        sx={{
                            backgroundColor: '#ffa726',
                            border: '2px solid #212121',
                            color: '#eeeeee',
                            height: '3em',
                        }}
                    >
                        {value.toString().toUpperCase()}
                    </Typography>
                </Grid>
            </>
        );
    };
    return (
        <Grid container sx={{ width: '100%', height: '100%' }}>
            {renderParameterValueMatch('LLM Name', LLMName)}
            {renderParameterValueMatch('Comparison Model ID', id)}
            {renderParameterValueMatch('Model Selection', modelSelection)}
            {renderParameterValueMatch('temperature', temperature)}
            {renderParameterValueMatch('frequency penalty', frequencyPenalty)}
            {renderParameterValueMatch('max length', maxLength)}
            {renderParameterValueMatch('presence penalty', presencePenalty)}
            {renderParameterValueMatch('Top P', topP)}
            {renderParameterValueMatch(
                'Stop Sequences',
                stopSequences.join(' - ')
            )}
        </Grid>
    );
};

export default OpenAIParameterDialog;
