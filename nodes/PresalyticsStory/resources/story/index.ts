import type { INodeProperties } from 'n8n-workflow';

export const storyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					]
				}
			},
			"options": [
				{
					"name": "Story Get",
					"value": "Story Get",
					"action": "Story: Get List of User Stories",
					"description": "Returns a list of stories for this user identifie via the access token presentated to the api",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				},
				{
					"name": "Story Post",
					"value": "Story Post",
					"action": "Story: Upload",
					"description": "Upload new story to presalytics api",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/"
						}
					}
				},
				{
					"name": "Story Post File",
					"value": "Story Post File",
					"action": "Story: Upload a File",
					"description": "Upload new story to presalytics api via an Open Office Xml file",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/file"
						}
					}
				},
				{
					"name": "Story Post File JSON",
					"value": "Story Post File JSON",
					"action": "Story: Upload a File (base64)",
					"description": "Upload new story to presalytics api via an Open Office Xml file",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/file/json"
						}
					}
				},
				{
					"name": "Story ID Delete",
					"value": "Story ID Delete",
					"action": "Story: Delete by Id",
					"description": "Remove a story and dependant data.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Story ID Get",
					"value": "Story ID Get",
					"action": "Story: Get by Id",
					"description": "Returns story metadata, inlcuding json object with story outline",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Story ID Put",
					"value": "Story ID Put",
					"action": "Story: Modify",
					"description": "Update story metadata, including story outline",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Story ID Analytics",
					"value": "Story ID Analytics",
					"action": "Story: View Analytics",
					"description": "returns an html document containing session and event metrics for the story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Story ID File Post",
					"value": "Story ID File Post",
					"action": "Story: Upload a File To Existing Story",
					"description": "Upload a file to an existing story",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/file"
						}
					}
				},
				{
					"name": "Story ID File Ooxmlautomationid Delete",
					"value": "Story ID File Ooxmlautomationid Delete",
					"action": "Story: Delete Subdocument",
					"description": "Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"id\"]}}/file/{{$parameter[\"ooxml_automation_id\"]}}"
						}
					}
				},
				{
					"name": "Story ID File Ooxmlautomationid Get",
					"value": "Story ID File Ooxmlautomationid Get",
					"action": "Story: Download Updated File",
					"description": "Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/file/{{$parameter[\"ooxml_automation_id\"]}}"
						}
					}
				},
				{
					"name": "Story ID Outline Get",
					"value": "Story ID Outline Get",
					"action": "Story: Get Story Outline",
					"description": "Returns Story's outline",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/outline"
						}
					}
				},
				{
					"name": "Story ID Outline Post",
					"value": "Story ID Outline Post",
					"action": "Story: Post Story Outline",
					"description": "Update a story outline.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/outline"
						}
					}
				},
				{
					"name": "Story ID Public",
					"value": "Story ID Public",
					"action": "Story: Public Link to Story Reveal.js Document",
					"description": "returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/public/"
						}
					}
				},
				{
					"name": "Story ID Reveal",
					"value": "Story ID Reveal",
					"action": "Story: Get Story at Reveal.js Document",
					"description": "returns an html document containing a reveal.js epresentation of the story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/reveal"
						}
					}
				},
				{
					"name": "Story ID Status Get",
					"value": "Story ID Status Get",
					"action": "Story: Get Story Status",
					"description": "Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Get"
					]
				}
			}
		},
		{
			"displayName": "Include Relationships",
			"name": "include_relationships",
			"description": "Indicate whether the returned object should include child relationships",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_relationships",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Get"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Get"
					]
				}
			}
		},
		{
			"displayName": "POST /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post"
					]
				}
			}
		},
		{
			"displayName": "Outline",
			"name": "outline",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "outline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post"
					]
				}
			}
		},
		{
			"displayName": "POST /file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File"
					]
				}
			}
		},
		{
			"displayName": "POST /file<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File"
					]
				}
			}
		},
		{
			"displayName": "POST /file/json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File JSON"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File JSON"
					]
				}
			}
		},
		{
			"displayName": "Content Length",
			"name": "content_length",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "content_length",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File JSON"
					]
				}
			}
		},
		{
			"displayName": "File",
			"name": "file",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File JSON"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "file_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "file_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File JSON"
					]
				}
			}
		},
		{
			"displayName": "Mimetype",
			"name": "mimetype",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mimetype",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story Post File JSON"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Delete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Get"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Get"
					]
				}
			}
		},
		{
			"displayName": "Include Relationships",
			"name": "include_relationships",
			"description": "Indicate whether the returned object should include child relationships",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_relationships",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Get"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Get"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "Pull a story object with associated collaborator user, permission, and session data(faster if cached from prior api call)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Get"
					]
				}
			}
		},
		{
			"displayName": "Refresh Cache",
			"name": "refresh_cache",
			"description": "Force the api reload the `Story full` object",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "refresh_cache",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Get"
					]
				}
			}
		},
		{
			"displayName": "PUT /{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Put"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Put"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Put"
					]
				}
			}
		},
		{
			"displayName": "PUT /{id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Put"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Analytics"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Analytics"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Post"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Post"
					]
				}
			}
		},
		{
			"displayName": "Replace Existing",
			"name": "replace_existing",
			"description": "Indicates whether a put or post method would replace the existing contents",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "replace_existing",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Post"
					]
				}
			}
		},
		{
			"displayName": "Obsolete ID",
			"name": "obsolete_id",
			"description": "A primary key pointing to an obsolete item in the story. Item type is context-dependent",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "obsolete_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Post"
					]
				}
			}
		},
		{
			"displayName": "Include Outline",
			"name": "include_outline",
			"description": "Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_outline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Post"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/file<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Post"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{id}/file/{ooxml_automation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Ooxmlautomationid Delete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Ooxmlautomationid Delete"
					]
				}
			}
		},
		{
			"displayName": "Ooxml Automation ID",
			"name": "ooxml_automation_id",
			"required": true,
			"description": "the id of the ooxml_automation object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Ooxmlautomationid Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/file/{ooxml_automation_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Ooxmlautomationid Get"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Ooxmlautomationid Get"
					]
				}
			}
		},
		{
			"displayName": "Ooxml Automation ID",
			"name": "ooxml_automation_id",
			"required": true,
			"description": "the id of the ooxml_automation object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID File Ooxmlautomationid Get"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/outline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Outline Get"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Outline Get"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/outline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Outline Post"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Outline Post"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/outline<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Outline Post"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/public/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Public"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Public"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/reveal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Reveal"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Reveal"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Status Get"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Story"
					],
					"operation": [
						"Story ID Status Get"
					]
				}
			}
		},
];
