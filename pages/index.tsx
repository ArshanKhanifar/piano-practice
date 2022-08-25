import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const notesStr = "CDEFGAB";
const notes = notesStr.split("");
const keys = notes.flatMap((n) => ["n-maj", "n-min"]);
const modes = [
  "Ionian",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Aeolian",
  "Locrian",
];

const MultipleSelectChip = ({
  values,
  onSelected,
}: {
  values: string[];
  onSelected: (v: string[]) => void;
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;
    const _newVal = typeof value === "string" ? value.split(",") : value;
    setSelectedValues(_newVal);
    onSelected(_newVal);
  };

  return (
    <Box sx={{ flex: 1, display: "flex" }}>
      <FormControl sx={{ m: 1, flex: 1 }}>
        <InputLabel id="demo-multiple-chip-label">Chord</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {values.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const Page: NextPageWithLayout = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "0 1rem" }}>
      <Grid item xs={12} md={8}>
        <h1>Practice Modes</h1>
        <MultipleSelectChip
          values={notes}
          onSelected={(chords) => {
            console.log("chords", chords);
          }}
        />
      </Grid>
    </Grid>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
