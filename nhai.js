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
			"Swaach Bharat Mission": {
				subcategories: [
					"Foot patrolling in traction distribution (Online)",
					"Real time monitoring of Tower wagons (Online)",
					"Online monitoring of OHE using SCADA (Online)",
					"Online monitoring of asset in Traction Distribution (Online)",
					"Tender Management in Traction Distribution (Online)",
					"Materials Management system in Traction Distribution (Online)",
					"Power quality monitoring , power measurements and fault detection  (Offline)",
					"Design and construction of 25 KV substation, 22/2.2 KV substation  (Offline)",
					"Mechanized working in the field of stripping,dismantling etc (Offline)",
					"Failure analysis of electronics card and its remedies (Offline)",
					"Transportation and handling of various equipment  (Offline)",
					"Formation of quality circles, data analysis and attention thereof (Offline)",
					"Development of R &D sections & laboratory to eradicate recurring defects  (Offline)",
					"Needs of specialization team for exchanging ideas  quality maintenance  (Offline)",
					"Pictorial demonstrations for upgrading skills of maintenance staff, supervisors etc (Offline)",
					"Automation of crane working by decontrol from work place. (Offline)",
					"Design,develop and installation of occupancy sensors to office buildings. (Offline)",
					"Automation of measuring & recording systems various electrical equipments (Offline)",
					"Multi Skilling of staff  to get optimum utilization of  manpower (Offline)",
					"Temperature sensing, monitoring, communicating & preventive action in power supply panels (Offline)",
					"Optimising use of air-conditioning for equipments and human comfort (Offline)",
				],
			},
			"Research and Development": {
				subcategories: [
					"Green energy: Electricity generation through piezoelectric mechanism  (Offline)",
					"Feasibility and suitability of installation of small scale on-grid wind mills over OHE masts (Offline)",
					"Potential of utilization of surplus railway land for  solar power plants  (Offline)",
					"Green buildings: Possibility and challenges in Railways’ context  (Offline)",
					"Water Desalination plants: can coastal railways in India learn & adopt from Israel? (Offline)",
					"Type of treatment to be given to rails to restrict corrosion/liner biting (Offline)",
					"Detection if rail fractures through detection of discontinuity in rails by OFC cables  (Offline)",
					"To make track free from glued joint, axle counter and signaling elements (Offline)",
					"Use of railway land for solar panels to avoid CRO . (Offline)",
					"Automation of water distribution system and getting rid of valve operating system (Offline)",
					"Business development by utilizing Roof Tops Of Large COP areas (Offline)",
					"Replacement of Iron/Steel  material in FOBs, Lift Frames, etc in coastal area (Offline)",
				],
			},
			"Road Transport and Road Safety": {
				subcategories: [
					"Public private partnership (PPP) – study of opportunities, challenges etc (Offline)",
					"Asset register and asset management, costing and commercial accounting  (Offline)",
					"Capital budgeting and project costing  (Offline)",
					"Zero based Budgeting  (Offline)",
					"Rationalization of allowances (Offline)",
				],
			},
			Administration: {
				subcategories: [
					"Logistic and supply chain management (Offline)",
					"Tendering in Railways along with contract management (Offline)",
					"Ticketing system in Railways (Offline)",
					"Terminal and Train Management system (Offline)",
					"PPP models for development of freight  terminal and stations (Offline)",
				],
			},
			Finance: {
				subcategories: [
					"Process improvements for warranty claim realizations (Offline)",
					"Increasing share of procurement through GeM  (Offline)",
					"Development of efficient inventory management system (Offline)",
				],
			},
			"Road Development": {
				subcategories: [
					"High reliability Train detection system (Offline)",
					"Implementation of Integrated Security System (Offline)",
					"Study of electronic interlocking (Offline)",
					"Study of automatic signaling (Offline)",
					"Study of Mobile Train Radio Communication  (Offline)",
					"Study of Integrated Passenger Information System (Offline)",
					"Installation, Configuration and testing of IP based telephone exchange (Offline)",
					"Study of Train Management System (TMS) (Offline)",
					"Study of control Communication with SDH/ PDH and optic fiber  (Offline)",
					"Automatic Validation of EI logic through formal verification tools (Offline)",
					"Machine learning based point predictive maintenance (Offline)",
					"AI based power supply monitoring (Offline)",
				],
			},
			"Content Creation and Mentorship": {
				subcategories: [
					"Contact-less integrated payment system",
					"Bicycle train integration",
					"Integrated control system for suburban railway",
					"Crew Scheduling system for suburban railway",
					"Access control of Suburban stations",
					"Assisted signal sighting system for the crew",
					"Assisted Troubleshooting system for the crew",
					"AI based crew behaviour monitoring system",
					"Integrating suburban network with State Public transport",
					"Review existing train operation & working rules",
					"Feasibility study for introducing AC trains in suburban system",
					"Impact of Metro on Suburban train services requirement",
				],
			},
			"Machine Learning": {
				subcategories: [
					"Image processing to develop assisted maintenance regime by apps",
					"Developing an optimized profile for maximizing wheel life",
					"Identifying materials for fabrication & furnishing of rolling stock",
					"Development of MIS system to help in troubleshooting of online failures",
					"Design and development of an online training module",
					"Designing a minimalistic modular light weight toilet",
					"Derailment detection device and its feasibility in Indian Railways",
					"Vibration analysis & study of feasibility of onboard condition monitoring of rolling stock",
					"Use of piezo based energy harvesting in wayside locations",
					"Study preventive maintenance schedule & optimise the activities",
					"Study air suspension system,FIBA and compare with spring suspension system.",
					"Study cases of train parting and suggest improvements",
					"Pros & cons of train set type rolling stock wrt conventional locomotive lead trains",
					"Study various types of coupler and their design",
					"Optimize depth of cut during tyre turning to increase wheel life",
					"Analyze wheel shelling cases in LHB coaches & find major causes.",
					"Analyze spring breakage cases in FIAT bogie & find major causes",
					"Study FIAT bogie design to identify vulnerable areas due to vibration at High speed",
					"Maintenance,monitoring and performance analysis of inverters fitted in SGAC coaches ",
					"Online monitoring of Temperature & engine parameter with alert notification",
					"Failure analysis of V belt breakage in SGAC coaches",
					"Maintenance and testing of healthiness of push pull system",
					"AI based Fire detection and suppression system in EMU using CCTV.",
					"Improvement of maintenance efficiency by reorganization of maintenance sections",
					"Automation of maintenance activities.",
					"Study & Update in cleaning practices of EMU coaches.",
				],
			},
			"App development": {
				subcategories: [
					"राजभाषा और तकनीकी विन्यास",
					"सूचना प्रौद्योगिकी और राजभाषा",
					"भारतीय रेलों पर राजभाषा का प्रभावी संचालन",
					"राजभाषा पारंगत प्रशिक्षु",
					"भारतीय रेल और राजभाषा।",
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
