const dataSource = {
  chart: {
    caption: "Alex Lancaster Sports Chart",
    subcaption: "2025",
    showplotborder: "1",
    plotfillalpha: "60",
    hoverfillcolor: "#CCCCCC",
    numberprefix: "$",
    plottooltext:
      "Interest in <b>$label</b> was $percentValue of parent category",
    theme: "candy"
  },
  category: [
    {
      label: "Sports",
      tooltext: "Hover over a sub-category to see details",
      color: "#ffffff",
      value: "150",
      category: [
        {
          label: "NCAA Football",
          color: "#f8bd19",
          value: "37",
          category: [
            {
              label: "Michigan",
              color: "#f8bd19",
              value: "80"
            },
            {
              label: "Others",
              color: "#f8bd19",
              value: "20"
            }
          ]
        },
        {
          label: "NFL",
          color: "#33ccff",
          value: "30",
          category: [
            {
              label: "Steelers",
              color: "#33ccff",
              value: "45"
            },
            {
              label: "Fantasy",
              color: "#33ccff",
              value: "35"
            },
            {
              label: "Other",
              color: "#33ccff",
              value: "20"
            }
          ]
        },
        {
          label: "NCAA Basketball",
          color: "#ffcccc",
          value: "11",
          category: [
            {
              label: "Michigan",
              color: "#ffcccc",
              value: "85"
            },
            {
              label: "Other",
              color: "#ffcccc",
              value: "15"
            }
          ]
        },
        {
          label: "NBA",
          color: "#ccff66",
          value: "10",
          category: [
            {
              label: "General",
              color: "#ccff66",
              value: "90"
            },
            {
              label: "Wizards",
              color: "#ccff66",
              value: "10"
            }
          ]
        },
        {
          label: "NCAA Hockey",
          color: "#082ff2ff",
          value: "2",
          category: [
            {
              label: "Michigan",
              color: "#082ff2ff",
              value: "95"
            },
            {
              label: "Other",
              color: "#082ff2ff",
              value: "5"
            }
          ]
        },
        {
          label: "MLB",
          color: "#f10808ff",
          value: "2",
          category: [
            {
              label: "Braves",
              color: "#f10808ff",
              value: "40"
            },
            {
              label: "Pirates",
              color: "#f10808ff",
              value: "30"
            },
            {
              label: "Other",
              color: "#f10808ff",
              value: "30"
            }
          ]
        },
        {
          label: "NHL",
          color: "#020607ff",
          value: "2",
          category: [
            {
              label: "Penguins",
              color: "#020607ff",
              value: "65"
            },
            {
              label: "Kraken",
              color: "#020607ff",
              value: "15"
            },
            {
              label: "Other",
              color: "#020607ff",
              value: "20"
            }
          ]
        },
        {
          label: "Golf",
          color: "#075404ff",
          value: "2",
          category: [
            {
              label: "Majors",
              color: "#075404ff",
              value: "90"
            },
            {
              label: "Other",
              color: "#075404ff",
              value: "10"
            }
          ]
        },
        {
          label: "Tennis",
          color: "#7ff74fff",
          value: "2",
          category: [
            {
              label: "Majors",
              color: "#7ff74fff",
              value: "99"
            },
            {
              label: "Other",
              color: "#7ff74fff",
              value: "1"
            }
          ]
        },
        {
          label: "Other",
          color: "#fbfbfbff",
          value: "2"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "multilevelpie",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});
