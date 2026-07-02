# Academic CV (LaTeX)

This project contains a North American-style academic CV for postdoctoral applications.

## Build on Windows

Open PowerShell in this folder and run:

```powershell
& "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64\xelatex.exe" -interaction=nonstopmode -halt-on-error Jaeyun_Sim_CV.tex
& "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64\xelatex.exe" -interaction=nonstopmode -halt-on-error Jaeyun_Sim_CV.tex
```

The output is `Jaeyun_Sim_CV.pdf`.

## Items to verify

- Preferred Romanization: `Jaeyun Sim` versus `Jaeyoon/Jae Yoon Shim`
- Author-name variants and boldface in each publication
- Final publication metadata for 2026 papers
- Exact dates for undergraduate research
- Whether to add phone number, city, citizenship/work authorization, references, or dissertation advisor
