---
title: GCP_broad_gatk_hg19
description: GATK annotation bundle for hg19 from GCP (gs://gcp-public-data--broad-references/hg19/v0/)
Author: rworkflow team
Last updated: 2022-12-21
type: article
---
## GCP_broad_gatk_hg19
GATK annotation bundle for hg19 from GCP (gs://gcp-public-data--broad-references/hg19/v0/)<br>Data source: <https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/hg19/v0>
## plot
![## GCP_broad_gatk_hg19](/plots/gcp_broad_gatk_hg19.svg)
## Inputs
|         |label     |type    |description                                             |
|:--------|:---------|:-------|:-------------------------------------------------------|
|filename |file name |string  |The file basename to download from the broad GCP bucket |
|idx      |index     |string? |The 'idx' or 'tbi' index file if existing               |
## Outputs
|      |label |type   |description                     |
|:-----|:-----|:------|:-------------------------------|
|gfile |gfile |File[] |The downloaded annotation files |
## Example:
```
recipeLoad('gcp_broad_gatk_hg19', return = TRUE)
gcp_broad_gatk_hg19$filename <- '1000G_omni2.5.b37.vcf.gz'
getData(gcp_broad_gatk_hg19, outdir = 'data/folder', notes = c('gcp', 'broad', 'reference', 'hg19', 'v0', '1000G', 'omni2.5')
```

