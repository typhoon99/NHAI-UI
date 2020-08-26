Handlebars.registerHelper("inc", function (value, options) {
	return parseInt(value) + 1;
});

$(document).ready(function(){
	var highwayContext = {
		highways: [
			"National Highway 1",
			"National Highway 2",
			"National Highway 3",
			"National Highway 4",
			"National Highway 5",
			"National Highway 6",
			"National Highway 7",
			"National Highway 8",
			"National Highway 9",
			"National Highway 10",
			"National Highway 11",
			"National Highway 12",
			"National Highway 13",
			"National Highway 14",
			"National Highway 15",
			"National Highway 16",
			"National Highway 17",
			"National Highway 18",
			"National Highway 19",
			"National Highway 20",
			"National Highway 21",
			"National Highway 22",
			"National Highway 23",
			"National Highway 24",
			"National Highway 25",
			"National Highway 26",
			"National Highway 27",
			"National Highway 28",
			"National Highway 29",
			"National Highway 30",
			"National Highway 31",
			"National Highway 32",
			"National Highway 33",
			"National Highway 34",
			"National Highway 35",
			"National Highway 36",
			"National Highway 37",
			"National Highway 38",
			"National Highway 39",
			"National Highway 40",
			"National Highway 41",
			"National Highway 42",
			"National Highway 43",
			"National Highway 44",
			"National Highway 45",
			"National Highway 46",
			"National Highway 47",
			"National Highway 48",
			"National Highway 49",
			"National Highway 50",
			"National Highway 51",
			"National Highway 52",
			"National Highway 53",
			"National Highway 54",
			"National Highway 55",
			"National Highway 56",
			"National Highway 57",
			"National Highway 58",
			"National Highway 59",
			"National Highway 60",
			"National Highway 61",
			"National Highway 62",
			"National Highway 63",
			"National Highway 64",
			"National Highway 65",
			"National Highway 66",
			"National Highway 67",
			"National Highway 68",
			"National Highway 69",
			"National Highway 70",
			"National Highway 71",
			"National Highway 73",
			"National Highway 75",
			"National Highway 77",
			"National Highway 79",
			"National Highway 81",
			"National Highway 83",
			"National Highway 85",
			"National Highway 87",
		],
	};

	// Retrieve the template data from the HTML (jQuery is used here).
	var template = $("#categoryTemplate").html();

	// Compile the template data into a function
	var templateScript = Handlebars.compile(template);

	var context = {
		categories: {
			"Swachh  Bharat Mission": {
				subcategories: [
					"Sanitization Development and maintainance project",
					"App development for waste management",
				],
			},
			"Research and Development": {
				subcategories: [
					"Ensuring Remote highway connectivity",
					"Electricity supply to highways and their maintenance",
					"Development of sustainable measures for better electrical connectivity",
					"Application development for highway related problems",
					"Automated highway system development ",
					"Proximity of Transportation network",
					"Geo-synthetics In Construction Of Roads",
					"Robotic Bridge Maintenance System development",
					"Prototype development for convenience of specially abled",
					"Mix Design for Pavement Overlays for Sustainable Development.",
					"Time And Motion Study on Road Construction Techniques.",
					"Road Edge Detection in All Weather and Illumination",
					"Deploying the 3Rs strategy, i.e Reuse, Recycle, Replace",
					"Ideate and research on material of crash barriers",
				],
			},
			"Road Transport and Road Safety": {
				subcategories: [
					"Safe system intersection performance",
					"Safety and research infrastructure Documentation",
					"Electronic Stability control for heavy vehicles",
					"Roadside drug testing technology development",
					"Traffic Circulation or Management",
					"National Highways free from Railway crossings",
					"Road division to ensure smooth traffic",
					"Creating proper barricades",
					"Collision Avoidance System",
				],
			},
			Administration: {
				subcategories: [
					"Administrative support to projects",
					"Documentation of project records,staff and contracts",
					"Maintaining details of financial transfers and due dates",
					"Scheduling and monitoring according to reporting deadline",
					"preparation of partners contracts and giving support",
					"Supporting Finance staff in auditing and reviewing .",
					"Ensuring the requirements of Administrative and Finance team are meet",
					"Organization of annual and quarterly strategic meetings",
				],
			},
			Finance: {
				subcategories: [
					"Tracking and monitoring Expenditure (through spreadsheets)",
					"Project Expenditure tracking ",
					"preparing financial reports for internal monitoring",
					"preparing and monitoring incoming and outgoing of funds. ",
					"Support to the required Finance and Administrative team",
					"Auditing, budget analysis of NHAI  projects",
				],
			},
			"Road Development": {
				subcategories: [
					"Development of highway standards",
					"Logistics efficiency enhancement",
					"development of grade separated intersection roads",
					"Port linked industrialization",
					"Road development in district head quarters",
					"Smart roads to underground ducts",
				],
			},
			"Content Creation and Mentorship": {
				subcategories: [
					"Content creation according to NHAI requirements",
					"Educating the on-site workers.",
					"Drafting MOU's between two nations",
				],
			},
			"Machine Learning": {
				subcategories: ["Data collection and analysis"],
			},
			"App development": {
				subcategories: [
					"Creating Mobile applications(under Swachh  Bharat)",
				],
			},
		},
	};

	$("#select-category-tab, #select-project-tab, #select-zone-tab, #select-division-tab").on('click', function(){
			return false;
	});
	// console.log(context);
	var html = templateScript(context);

	// Insert the HTML code into the page
	$("#categoryRow").append(html);

	$(".category").hover(
		function () {
			$(this).append(
				'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
			);
		},
		function () {
			$(this).find("i").last().remove();
		}
	);

	$(".category").on("click", function () {
		$(this).prev().attr("checked", "true");
		$(this).append(
			'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
		);
		$("#select-category-tab i").first().addClass("filled");
		$("#select-category-tab span").first().addClass("filled");
		var subHeading =
			"Available Projects in: " + $(this).find("label").html();
		$("#subCategory-heading").text(subHeading);
		// console.log(subHeading);
		$(this).append(
			'<i class="fa fa-check text-success" aria-hidden="true"></i>'
		);
		var template = $("#subCategoryTemplate").html();
		// Compile the template data into a function
		var templateScript = Handlebars.compile(template);
		var catId = $(this).find("label").html();
		console.log(catId);
		var subCats = context.categories[catId];
		console.log(subCats);
		var html = templateScript(subCats);
		// console.log(html);
		// Insert the HTML code into the page
		$("#subCategoryRow").append(html);
		$("#select-project-tab").tab("show");

		$(".subcategory").hover(
			function () {
				$(this).append(
					'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
				);
			},
			function () {
				$(this).find("i").last().remove();
			}
		);

		$("#subCategory-work").on("click", function () {
			Swal.fire({
				title: "Submit your Project",
				input: "text",
				inputAttributes: {
					autocapitalize: "off",
				},
				showCancelButton: true,
				confirmButtonText: "Submit",
				preConfirm: (proj) => {
					$("#select-project-tab").first().addClass("filled");
					$('#lblCustom').html(proj);
					$("#customProj").removeClass('d-none');
					// console.log($("#subcategoryCustom").next());
					$("#subcategoryCustom").next().click();
				},
				allowOutsideClick: () => !Swal.isLoading(),
			});
		});

		$(".subcategory").on("click", function () {
			// console.log("subcat selected");
			$(this).prev().attr("checked", "true");
			$(this).append(
				'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
			);
			$("#select-project-tab i").first().addClass("filled");
			$("#select-project-tab span").first().addClass("filled");
			// Retrieve the template data from the HTML (jQuery is used here).
			var template = $("#zoneTemplate").html();
			// Compile the template data into a function
			var templateScript = Handlebars.compile(template);
			var html = templateScript(highwayContext);
			// Insert the HTML code into the page
			$("#zonesRow").append(html);
			$("#select-zone-tab").tab("show");
			//on hover show check mark
			$(".zone").hover(
				function () {
					$(this).append(
						'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
					);
				},
				function () {
					$(this).find("i").last().remove();
				}
			);
			$(".zone").on("click", function () {
				$(this).prev().attr("checked", "true");
				$("#select-division-tab i").first().addClass("filled");
				$("#select-division-tab span").first().addClass("filled");
				window.location.href = "./studentRegistration.html";
			});
		});
	});
})
