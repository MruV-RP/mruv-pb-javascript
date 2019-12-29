// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/errors.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_policy_pb from "../../../../../google/ads/googleads/v2/common/policy_pb";
import * as google_ads_googleads_v2_common_value_pb from "../../../../../google/ads/googleads/v2/common/value_pb";
import * as google_ads_googleads_v2_errors_access_invitation_error_pb from "../../../../../google/ads/googleads/v2/errors/access_invitation_error_pb";
import * as google_ads_googleads_v2_errors_account_budget_proposal_error_pb from "../../../../../google/ads/googleads/v2/errors/account_budget_proposal_error_pb";
import * as google_ads_googleads_v2_errors_ad_customizer_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_customizer_error_pb";
import * as google_ads_googleads_v2_errors_ad_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_ad_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_ad_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_bid_modifier_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_criterion_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_feed_error_pb";
import * as google_ads_googleads_v2_errors_ad_parameter_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_parameter_error_pb";
import * as google_ads_googleads_v2_errors_ad_sharing_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_sharing_error_pb";
import * as google_ads_googleads_v2_errors_adx_error_pb from "../../../../../google/ads/googleads/v2/errors/adx_error_pb";
import * as google_ads_googleads_v2_errors_asset_error_pb from "../../../../../google/ads/googleads/v2/errors/asset_error_pb";
import * as google_ads_googleads_v2_errors_authentication_error_pb from "../../../../../google/ads/googleads/v2/errors/authentication_error_pb";
import * as google_ads_googleads_v2_errors_authorization_error_pb from "../../../../../google/ads/googleads/v2/errors/authorization_error_pb";
import * as google_ads_googleads_v2_errors_bidding_error_pb from "../../../../../google/ads/googleads/v2/errors/bidding_error_pb";
import * as google_ads_googleads_v2_errors_bidding_strategy_error_pb from "../../../../../google/ads/googleads/v2/errors/bidding_strategy_error_pb";
import * as google_ads_googleads_v2_errors_billing_setup_error_pb from "../../../../../google/ads/googleads/v2/errors/billing_setup_error_pb";
import * as google_ads_googleads_v2_errors_campaign_budget_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_budget_error_pb";
import * as google_ads_googleads_v2_errors_campaign_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_criterion_error_pb";
import * as google_ads_googleads_v2_errors_campaign_draft_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_draft_error_pb";
import * as google_ads_googleads_v2_errors_campaign_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_error_pb";
import * as google_ads_googleads_v2_errors_campaign_experiment_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_experiment_error_pb";
import * as google_ads_googleads_v2_errors_campaign_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_feed_error_pb";
import * as google_ads_googleads_v2_errors_campaign_shared_set_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_shared_set_error_pb";
import * as google_ads_googleads_v2_errors_change_status_error_pb from "../../../../../google/ads/googleads/v2/errors/change_status_error_pb";
import * as google_ads_googleads_v2_errors_collection_size_error_pb from "../../../../../google/ads/googleads/v2/errors/collection_size_error_pb";
import * as google_ads_googleads_v2_errors_context_error_pb from "../../../../../google/ads/googleads/v2/errors/context_error_pb";
import * as google_ads_googleads_v2_errors_conversion_action_error_pb from "../../../../../google/ads/googleads/v2/errors/conversion_action_error_pb";
import * as google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb from "../../../../../google/ads/googleads/v2/errors/conversion_adjustment_upload_error_pb";
import * as google_ads_googleads_v2_errors_conversion_upload_error_pb from "../../../../../google/ads/googleads/v2/errors/conversion_upload_error_pb";
import * as google_ads_googleads_v2_errors_country_code_error_pb from "../../../../../google/ads/googleads/v2/errors/country_code_error_pb";
import * as google_ads_googleads_v2_errors_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/criterion_error_pb";
import * as google_ads_googleads_v2_errors_currency_code_error_pb from "../../../../../google/ads/googleads/v2/errors/currency_code_error_pb";
import * as google_ads_googleads_v2_errors_custom_interest_error_pb from "../../../../../google/ads/googleads/v2/errors/custom_interest_error_pb";
import * as google_ads_googleads_v2_errors_customer_client_link_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_client_link_error_pb";
import * as google_ads_googleads_v2_errors_customer_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_error_pb";
import * as google_ads_googleads_v2_errors_customer_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_feed_error_pb";
import * as google_ads_googleads_v2_errors_customer_manager_link_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_manager_link_error_pb";
import * as google_ads_googleads_v2_errors_database_error_pb from "../../../../../google/ads/googleads/v2/errors/database_error_pb";
import * as google_ads_googleads_v2_errors_date_error_pb from "../../../../../google/ads/googleads/v2/errors/date_error_pb";
import * as google_ads_googleads_v2_errors_date_range_error_pb from "../../../../../google/ads/googleads/v2/errors/date_range_error_pb";
import * as google_ads_googleads_v2_errors_distinct_error_pb from "../../../../../google/ads/googleads/v2/errors/distinct_error_pb";
import * as google_ads_googleads_v2_errors_enum_error_pb from "../../../../../google/ads/googleads/v2/errors/enum_error_pb";
import * as google_ads_googleads_v2_errors_extension_feed_item_error_pb from "../../../../../google/ads/googleads/v2/errors/extension_feed_item_error_pb";
import * as google_ads_googleads_v2_errors_extension_setting_error_pb from "../../../../../google/ads/googleads/v2/errors/extension_setting_error_pb";
import * as google_ads_googleads_v2_errors_feed_attribute_reference_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_attribute_reference_error_pb";
import * as google_ads_googleads_v2_errors_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_error_pb";
import * as google_ads_googleads_v2_errors_feed_item_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_item_error_pb";
import * as google_ads_googleads_v2_errors_feed_item_target_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_item_target_error_pb";
import * as google_ads_googleads_v2_errors_feed_item_validation_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_item_validation_error_pb";
import * as google_ads_googleads_v2_errors_feed_mapping_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_mapping_error_pb";
import * as google_ads_googleads_v2_errors_field_error_pb from "../../../../../google/ads/googleads/v2/errors/field_error_pb";
import * as google_ads_googleads_v2_errors_field_mask_error_pb from "../../../../../google/ads/googleads/v2/errors/field_mask_error_pb";
import * as google_ads_googleads_v2_errors_function_error_pb from "../../../../../google/ads/googleads/v2/errors/function_error_pb";
import * as google_ads_googleads_v2_errors_function_parsing_error_pb from "../../../../../google/ads/googleads/v2/errors/function_parsing_error_pb";
import * as google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb from "../../../../../google/ads/googleads/v2/errors/geo_target_constant_suggestion_error_pb";
import * as google_ads_googleads_v2_errors_header_error_pb from "../../../../../google/ads/googleads/v2/errors/header_error_pb";
import * as google_ads_googleads_v2_errors_id_error_pb from "../../../../../google/ads/googleads/v2/errors/id_error_pb";
import * as google_ads_googleads_v2_errors_image_error_pb from "../../../../../google/ads/googleads/v2/errors/image_error_pb";
import * as google_ads_googleads_v2_errors_internal_error_pb from "../../../../../google/ads/googleads/v2/errors/internal_error_pb";
import * as google_ads_googleads_v2_errors_invoice_error_pb from "../../../../../google/ads/googleads/v2/errors/invoice_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_ad_group_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_campaign_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_idea_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_idea_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_keyword_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_negative_keyword_error_pb";
import * as google_ads_googleads_v2_errors_label_error_pb from "../../../../../google/ads/googleads/v2/errors/label_error_pb";
import * as google_ads_googleads_v2_errors_language_code_error_pb from "../../../../../google/ads/googleads/v2/errors/language_code_error_pb";
import * as google_ads_googleads_v2_errors_list_operation_error_pb from "../../../../../google/ads/googleads/v2/errors/list_operation_error_pb";
import * as google_ads_googleads_v2_errors_manager_link_error_pb from "../../../../../google/ads/googleads/v2/errors/manager_link_error_pb";
import * as google_ads_googleads_v2_errors_media_bundle_error_pb from "../../../../../google/ads/googleads/v2/errors/media_bundle_error_pb";
import * as google_ads_googleads_v2_errors_media_file_error_pb from "../../../../../google/ads/googleads/v2/errors/media_file_error_pb";
import * as google_ads_googleads_v2_errors_media_upload_error_pb from "../../../../../google/ads/googleads/v2/errors/media_upload_error_pb";
import * as google_ads_googleads_v2_errors_multiplier_error_pb from "../../../../../google/ads/googleads/v2/errors/multiplier_error_pb";
import * as google_ads_googleads_v2_errors_mutate_error_pb from "../../../../../google/ads/googleads/v2/errors/mutate_error_pb";
import * as google_ads_googleads_v2_errors_mutate_job_error_pb from "../../../../../google/ads/googleads/v2/errors/mutate_job_error_pb";
import * as google_ads_googleads_v2_errors_new_resource_creation_error_pb from "../../../../../google/ads/googleads/v2/errors/new_resource_creation_error_pb";
import * as google_ads_googleads_v2_errors_not_empty_error_pb from "../../../../../google/ads/googleads/v2/errors/not_empty_error_pb";
import * as google_ads_googleads_v2_errors_not_whitelisted_error_pb from "../../../../../google/ads/googleads/v2/errors/not_whitelisted_error_pb";
import * as google_ads_googleads_v2_errors_null_error_pb from "../../../../../google/ads/googleads/v2/errors/null_error_pb";
import * as google_ads_googleads_v2_errors_operation_access_denied_error_pb from "../../../../../google/ads/googleads/v2/errors/operation_access_denied_error_pb";
import * as google_ads_googleads_v2_errors_operator_error_pb from "../../../../../google/ads/googleads/v2/errors/operator_error_pb";
import * as google_ads_googleads_v2_errors_partial_failure_error_pb from "../../../../../google/ads/googleads/v2/errors/partial_failure_error_pb";
import * as google_ads_googleads_v2_errors_policy_finding_error_pb from "../../../../../google/ads/googleads/v2/errors/policy_finding_error_pb";
import * as google_ads_googleads_v2_errors_policy_validation_parameter_error_pb from "../../../../../google/ads/googleads/v2/errors/policy_validation_parameter_error_pb";
import * as google_ads_googleads_v2_errors_policy_violation_error_pb from "../../../../../google/ads/googleads/v2/errors/policy_violation_error_pb";
import * as google_ads_googleads_v2_errors_query_error_pb from "../../../../../google/ads/googleads/v2/errors/query_error_pb";
import * as google_ads_googleads_v2_errors_quota_error_pb from "../../../../../google/ads/googleads/v2/errors/quota_error_pb";
import * as google_ads_googleads_v2_errors_range_error_pb from "../../../../../google/ads/googleads/v2/errors/range_error_pb";
import * as google_ads_googleads_v2_errors_reach_plan_error_pb from "../../../../../google/ads/googleads/v2/errors/reach_plan_error_pb";
import * as google_ads_googleads_v2_errors_recommendation_error_pb from "../../../../../google/ads/googleads/v2/errors/recommendation_error_pb";
import * as google_ads_googleads_v2_errors_region_code_error_pb from "../../../../../google/ads/googleads/v2/errors/region_code_error_pb";
import * as google_ads_googleads_v2_errors_request_error_pb from "../../../../../google/ads/googleads/v2/errors/request_error_pb";
import * as google_ads_googleads_v2_errors_resource_access_denied_error_pb from "../../../../../google/ads/googleads/v2/errors/resource_access_denied_error_pb";
import * as google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb from "../../../../../google/ads/googleads/v2/errors/resource_count_limit_exceeded_error_pb";
import * as google_ads_googleads_v2_errors_setting_error_pb from "../../../../../google/ads/googleads/v2/errors/setting_error_pb";
import * as google_ads_googleads_v2_errors_shared_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/shared_criterion_error_pb";
import * as google_ads_googleads_v2_errors_shared_set_error_pb from "../../../../../google/ads/googleads/v2/errors/shared_set_error_pb";
import * as google_ads_googleads_v2_errors_size_limit_error_pb from "../../../../../google/ads/googleads/v2/errors/size_limit_error_pb";
import * as google_ads_googleads_v2_errors_string_format_error_pb from "../../../../../google/ads/googleads/v2/errors/string_format_error_pb";
import * as google_ads_googleads_v2_errors_string_length_error_pb from "../../../../../google/ads/googleads/v2/errors/string_length_error_pb";
import * as google_ads_googleads_v2_errors_url_field_error_pb from "../../../../../google/ads/googleads/v2/errors/url_field_error_pb";
import * as google_ads_googleads_v2_errors_user_list_error_pb from "../../../../../google/ads/googleads/v2/errors/user_list_error_pb";
import * as google_ads_googleads_v2_errors_youtube_video_registration_error_pb from "../../../../../google/ads/googleads/v2/errors/youtube_video_registration_error_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GoogleAdsFailure extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<GoogleAdsError>;
  setErrorsList(value: Array<GoogleAdsError>): void;
  addErrors(value?: GoogleAdsError, index?: number): GoogleAdsError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsFailure.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsFailure): GoogleAdsFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsFailure;
  static deserializeBinaryFromReader(message: GoogleAdsFailure, reader: jspb.BinaryReader): GoogleAdsFailure;
}

export namespace GoogleAdsFailure {
  export type AsObject = {
    errorsList: Array<GoogleAdsError.AsObject>,
  }
}

export class GoogleAdsError extends jspb.Message {
  hasErrorCode(): boolean;
  clearErrorCode(): void;
  getErrorCode(): ErrorCode | undefined;
  setErrorCode(value?: ErrorCode): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasTrigger(): boolean;
  clearTrigger(): void;
  getTrigger(): google_ads_googleads_v2_common_value_pb.Value | undefined;
  setTrigger(value?: google_ads_googleads_v2_common_value_pb.Value): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): ErrorLocation | undefined;
  setLocation(value?: ErrorLocation): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): ErrorDetails | undefined;
  setDetails(value?: ErrorDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsError.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsError): GoogleAdsError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsError;
  static deserializeBinaryFromReader(message: GoogleAdsError, reader: jspb.BinaryReader): GoogleAdsError;
}

export namespace GoogleAdsError {
  export type AsObject = {
    errorCode?: ErrorCode.AsObject,
    message: string,
    trigger?: google_ads_googleads_v2_common_value_pb.Value.AsObject,
    location?: ErrorLocation.AsObject,
    details?: ErrorDetails.AsObject,
  }
}

export class ErrorCode extends jspb.Message {
  hasRequestError(): boolean;
  clearRequestError(): void;
  getRequestError(): google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestErrorMap[keyof google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestErrorMap];
  setRequestError(value: google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestErrorMap[keyof google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestErrorMap]): void;

  hasBiddingStrategyError(): boolean;
  clearBiddingStrategyError(): void;
  getBiddingStrategyError(): google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyErrorMap[keyof google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyErrorMap];
  setBiddingStrategyError(value: google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyErrorMap[keyof google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyErrorMap]): void;

  hasUrlFieldError(): boolean;
  clearUrlFieldError(): void;
  getUrlFieldError(): google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldErrorMap[keyof google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldErrorMap];
  setUrlFieldError(value: google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldErrorMap[keyof google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldErrorMap]): void;

  hasListOperationError(): boolean;
  clearListOperationError(): void;
  getListOperationError(): google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationErrorMap[keyof google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationErrorMap];
  setListOperationError(value: google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationErrorMap[keyof google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationErrorMap]): void;

  hasQueryError(): boolean;
  clearQueryError(): void;
  getQueryError(): google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryErrorMap[keyof google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryErrorMap];
  setQueryError(value: google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryErrorMap[keyof google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryErrorMap]): void;

  hasMutateError(): boolean;
  clearMutateError(): void;
  getMutateError(): google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateErrorMap[keyof google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateErrorMap];
  setMutateError(value: google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateErrorMap[keyof google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateErrorMap]): void;

  hasFieldMaskError(): boolean;
  clearFieldMaskError(): void;
  getFieldMaskError(): google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskErrorMap[keyof google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskErrorMap];
  setFieldMaskError(value: google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskErrorMap[keyof google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskErrorMap]): void;

  hasAuthorizationError(): boolean;
  clearAuthorizationError(): void;
  getAuthorizationError(): google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationErrorMap[keyof google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationErrorMap];
  setAuthorizationError(value: google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationErrorMap[keyof google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationErrorMap]): void;

  hasInternalError(): boolean;
  clearInternalError(): void;
  getInternalError(): google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalErrorMap[keyof google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalErrorMap];
  setInternalError(value: google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalErrorMap[keyof google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalErrorMap]): void;

  hasQuotaError(): boolean;
  clearQuotaError(): void;
  getQuotaError(): google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaErrorMap[keyof google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaErrorMap];
  setQuotaError(value: google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaErrorMap[keyof google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaErrorMap]): void;

  hasAdError(): boolean;
  clearAdError(): void;
  getAdError(): google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdErrorMap[keyof google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdErrorMap];
  setAdError(value: google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdErrorMap[keyof google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdErrorMap]): void;

  hasAdGroupError(): boolean;
  clearAdGroupError(): void;
  getAdGroupError(): google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupErrorMap[keyof google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupErrorMap];
  setAdGroupError(value: google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupErrorMap[keyof google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupErrorMap]): void;

  hasCampaignBudgetError(): boolean;
  clearCampaignBudgetError(): void;
  getCampaignBudgetError(): google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetErrorMap[keyof google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetErrorMap];
  setCampaignBudgetError(value: google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetErrorMap[keyof google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetErrorMap]): void;

  hasCampaignError(): boolean;
  clearCampaignError(): void;
  getCampaignError(): google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignErrorMap[keyof google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignErrorMap];
  setCampaignError(value: google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignErrorMap[keyof google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignErrorMap]): void;

  hasAuthenticationError(): boolean;
  clearAuthenticationError(): void;
  getAuthenticationError(): google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationErrorMap[keyof google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationErrorMap];
  setAuthenticationError(value: google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationErrorMap[keyof google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationErrorMap]): void;

  hasAdGroupCriterionError(): boolean;
  clearAdGroupCriterionError(): void;
  getAdGroupCriterionError(): google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionErrorMap[keyof google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionErrorMap];
  setAdGroupCriterionError(value: google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionErrorMap[keyof google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionErrorMap]): void;

  hasAdCustomizerError(): boolean;
  clearAdCustomizerError(): void;
  getAdCustomizerError(): google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerErrorMap[keyof google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerErrorMap];
  setAdCustomizerError(value: google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerErrorMap[keyof google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerErrorMap]): void;

  hasAdGroupAdError(): boolean;
  clearAdGroupAdError(): void;
  getAdGroupAdError(): google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdErrorMap[keyof google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdErrorMap];
  setAdGroupAdError(value: google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdErrorMap[keyof google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdErrorMap]): void;

  hasAdSharingError(): boolean;
  clearAdSharingError(): void;
  getAdSharingError(): google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingErrorMap[keyof google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingErrorMap];
  setAdSharingError(value: google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingErrorMap[keyof google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingErrorMap]): void;

  hasAdxError(): boolean;
  clearAdxError(): void;
  getAdxError(): google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxErrorMap[keyof google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxErrorMap];
  setAdxError(value: google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxErrorMap[keyof google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxErrorMap]): void;

  hasAssetError(): boolean;
  clearAssetError(): void;
  getAssetError(): google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetErrorMap[keyof google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetErrorMap];
  setAssetError(value: google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetErrorMap[keyof google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetErrorMap]): void;

  hasBiddingError(): boolean;
  clearBiddingError(): void;
  getBiddingError(): google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingErrorMap[keyof google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingErrorMap];
  setBiddingError(value: google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingErrorMap[keyof google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingErrorMap]): void;

  hasCampaignCriterionError(): boolean;
  clearCampaignCriterionError(): void;
  getCampaignCriterionError(): google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionErrorMap[keyof google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionErrorMap];
  setCampaignCriterionError(value: google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionErrorMap[keyof google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionErrorMap]): void;

  hasCollectionSizeError(): boolean;
  clearCollectionSizeError(): void;
  getCollectionSizeError(): google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeErrorMap[keyof google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeErrorMap];
  setCollectionSizeError(value: google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeErrorMap[keyof google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeErrorMap]): void;

  hasCountryCodeError(): boolean;
  clearCountryCodeError(): void;
  getCountryCodeError(): google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeErrorMap[keyof google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeErrorMap];
  setCountryCodeError(value: google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeErrorMap[keyof google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeErrorMap]): void;

  hasCriterionError(): boolean;
  clearCriterionError(): void;
  getCriterionError(): google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionErrorMap[keyof google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionErrorMap];
  setCriterionError(value: google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionErrorMap[keyof google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionErrorMap]): void;

  hasCustomerError(): boolean;
  clearCustomerError(): void;
  getCustomerError(): google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerErrorMap[keyof google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerErrorMap];
  setCustomerError(value: google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerErrorMap[keyof google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerErrorMap]): void;

  hasDateError(): boolean;
  clearDateError(): void;
  getDateError(): google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateErrorMap[keyof google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateErrorMap];
  setDateError(value: google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateErrorMap[keyof google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateErrorMap]): void;

  hasDateRangeError(): boolean;
  clearDateRangeError(): void;
  getDateRangeError(): google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeErrorMap[keyof google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeErrorMap];
  setDateRangeError(value: google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeErrorMap[keyof google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeErrorMap]): void;

  hasDistinctError(): boolean;
  clearDistinctError(): void;
  getDistinctError(): google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctErrorMap[keyof google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctErrorMap];
  setDistinctError(value: google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctErrorMap[keyof google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctErrorMap]): void;

  hasFeedAttributeReferenceError(): boolean;
  clearFeedAttributeReferenceError(): void;
  getFeedAttributeReferenceError(): google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceErrorMap[keyof google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceErrorMap];
  setFeedAttributeReferenceError(value: google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceErrorMap[keyof google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceErrorMap]): void;

  hasFunctionError(): boolean;
  clearFunctionError(): void;
  getFunctionError(): google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionErrorMap[keyof google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionErrorMap];
  setFunctionError(value: google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionErrorMap[keyof google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionErrorMap]): void;

  hasFunctionParsingError(): boolean;
  clearFunctionParsingError(): void;
  getFunctionParsingError(): google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingErrorMap[keyof google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingErrorMap];
  setFunctionParsingError(value: google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingErrorMap[keyof google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingErrorMap]): void;

  hasIdError(): boolean;
  clearIdError(): void;
  getIdError(): google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdErrorMap[keyof google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdErrorMap];
  setIdError(value: google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdErrorMap[keyof google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdErrorMap]): void;

  hasImageError(): boolean;
  clearImageError(): void;
  getImageError(): google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageErrorMap[keyof google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageErrorMap];
  setImageError(value: google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageErrorMap[keyof google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageErrorMap]): void;

  hasLanguageCodeError(): boolean;
  clearLanguageCodeError(): void;
  getLanguageCodeError(): google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeErrorMap[keyof google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeErrorMap];
  setLanguageCodeError(value: google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeErrorMap[keyof google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeErrorMap]): void;

  hasMediaBundleError(): boolean;
  clearMediaBundleError(): void;
  getMediaBundleError(): google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleErrorMap[keyof google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleErrorMap];
  setMediaBundleError(value: google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleErrorMap[keyof google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleErrorMap]): void;

  hasMediaUploadError(): boolean;
  clearMediaUploadError(): void;
  getMediaUploadError(): google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadErrorMap[keyof google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadErrorMap];
  setMediaUploadError(value: google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadErrorMap[keyof google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadErrorMap]): void;

  hasMediaFileError(): boolean;
  clearMediaFileError(): void;
  getMediaFileError(): google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileErrorMap[keyof google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileErrorMap];
  setMediaFileError(value: google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileErrorMap[keyof google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileErrorMap]): void;

  hasMultiplierError(): boolean;
  clearMultiplierError(): void;
  getMultiplierError(): google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierErrorMap[keyof google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierErrorMap];
  setMultiplierError(value: google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierErrorMap[keyof google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierErrorMap]): void;

  hasNewResourceCreationError(): boolean;
  clearNewResourceCreationError(): void;
  getNewResourceCreationError(): google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationErrorMap[keyof google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationErrorMap];
  setNewResourceCreationError(value: google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationErrorMap[keyof google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationErrorMap]): void;

  hasNotEmptyError(): boolean;
  clearNotEmptyError(): void;
  getNotEmptyError(): google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyErrorMap[keyof google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyErrorMap];
  setNotEmptyError(value: google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyErrorMap[keyof google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyErrorMap]): void;

  hasNullError(): boolean;
  clearNullError(): void;
  getNullError(): google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullErrorMap[keyof google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullErrorMap];
  setNullError(value: google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullErrorMap[keyof google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullErrorMap]): void;

  hasOperatorError(): boolean;
  clearOperatorError(): void;
  getOperatorError(): google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorErrorMap[keyof google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorErrorMap];
  setOperatorError(value: google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorErrorMap[keyof google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorErrorMap]): void;

  hasRangeError(): boolean;
  clearRangeError(): void;
  getRangeError(): google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeErrorMap[keyof google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeErrorMap];
  setRangeError(value: google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeErrorMap[keyof google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeErrorMap]): void;

  hasRecommendationError(): boolean;
  clearRecommendationError(): void;
  getRecommendationError(): google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationErrorMap[keyof google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationErrorMap];
  setRecommendationError(value: google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationErrorMap[keyof google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationErrorMap]): void;

  hasRegionCodeError(): boolean;
  clearRegionCodeError(): void;
  getRegionCodeError(): google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeErrorMap[keyof google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeErrorMap];
  setRegionCodeError(value: google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeErrorMap[keyof google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeErrorMap]): void;

  hasSettingError(): boolean;
  clearSettingError(): void;
  getSettingError(): google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingErrorMap[keyof google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingErrorMap];
  setSettingError(value: google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingErrorMap[keyof google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingErrorMap]): void;

  hasStringFormatError(): boolean;
  clearStringFormatError(): void;
  getStringFormatError(): google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatErrorMap[keyof google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatErrorMap];
  setStringFormatError(value: google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatErrorMap[keyof google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatErrorMap]): void;

  hasStringLengthError(): boolean;
  clearStringLengthError(): void;
  getStringLengthError(): google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthErrorMap[keyof google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthErrorMap];
  setStringLengthError(value: google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthErrorMap[keyof google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthErrorMap]): void;

  hasOperationAccessDeniedError(): boolean;
  clearOperationAccessDeniedError(): void;
  getOperationAccessDeniedError(): google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedErrorMap[keyof google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedErrorMap];
  setOperationAccessDeniedError(value: google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedErrorMap[keyof google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedErrorMap]): void;

  hasResourceAccessDeniedError(): boolean;
  clearResourceAccessDeniedError(): void;
  getResourceAccessDeniedError(): google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedErrorMap[keyof google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedErrorMap];
  setResourceAccessDeniedError(value: google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedErrorMap[keyof google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedErrorMap]): void;

  hasResourceCountLimitExceededError(): boolean;
  clearResourceCountLimitExceededError(): void;
  getResourceCountLimitExceededError(): google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededErrorMap[keyof google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededErrorMap];
  setResourceCountLimitExceededError(value: google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededErrorMap[keyof google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededErrorMap]): void;

  hasYoutubeVideoRegistrationError(): boolean;
  clearYoutubeVideoRegistrationError(): void;
  getYoutubeVideoRegistrationError(): google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationErrorMap[keyof google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationErrorMap];
  setYoutubeVideoRegistrationError(value: google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationErrorMap[keyof google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationErrorMap]): void;

  hasAdGroupBidModifierError(): boolean;
  clearAdGroupBidModifierError(): void;
  getAdGroupBidModifierError(): google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierErrorMap[keyof google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierErrorMap];
  setAdGroupBidModifierError(value: google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierErrorMap[keyof google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierErrorMap]): void;

  hasContextError(): boolean;
  clearContextError(): void;
  getContextError(): google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextErrorMap[keyof google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextErrorMap];
  setContextError(value: google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextErrorMap[keyof google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextErrorMap]): void;

  hasFieldError(): boolean;
  clearFieldError(): void;
  getFieldError(): google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldErrorMap[keyof google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldErrorMap];
  setFieldError(value: google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldErrorMap[keyof google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldErrorMap]): void;

  hasSharedSetError(): boolean;
  clearSharedSetError(): void;
  getSharedSetError(): google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetErrorMap[keyof google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetErrorMap];
  setSharedSetError(value: google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetErrorMap[keyof google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetErrorMap]): void;

  hasSharedCriterionError(): boolean;
  clearSharedCriterionError(): void;
  getSharedCriterionError(): google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionErrorMap[keyof google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionErrorMap];
  setSharedCriterionError(value: google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionErrorMap[keyof google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionErrorMap]): void;

  hasCampaignSharedSetError(): boolean;
  clearCampaignSharedSetError(): void;
  getCampaignSharedSetError(): google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetErrorMap[keyof google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetErrorMap];
  setCampaignSharedSetError(value: google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetErrorMap[keyof google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetErrorMap]): void;

  hasConversionActionError(): boolean;
  clearConversionActionError(): void;
  getConversionActionError(): google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionErrorMap[keyof google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionErrorMap];
  setConversionActionError(value: google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionErrorMap[keyof google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionErrorMap]): void;

  hasConversionAdjustmentUploadError(): boolean;
  clearConversionAdjustmentUploadError(): void;
  getConversionAdjustmentUploadError(): google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadErrorMap[keyof google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadErrorMap];
  setConversionAdjustmentUploadError(value: google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadErrorMap[keyof google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadErrorMap]): void;

  hasConversionUploadError(): boolean;
  clearConversionUploadError(): void;
  getConversionUploadError(): google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadErrorMap[keyof google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadErrorMap];
  setConversionUploadError(value: google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadErrorMap[keyof google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadErrorMap]): void;

  hasHeaderError(): boolean;
  clearHeaderError(): void;
  getHeaderError(): google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderErrorMap[keyof google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderErrorMap];
  setHeaderError(value: google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderErrorMap[keyof google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderErrorMap]): void;

  hasDatabaseError(): boolean;
  clearDatabaseError(): void;
  getDatabaseError(): google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseErrorMap[keyof google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseErrorMap];
  setDatabaseError(value: google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseErrorMap[keyof google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseErrorMap]): void;

  hasPolicyFindingError(): boolean;
  clearPolicyFindingError(): void;
  getPolicyFindingError(): google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingErrorMap[keyof google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingErrorMap];
  setPolicyFindingError(value: google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingErrorMap[keyof google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingErrorMap]): void;

  hasEnumError(): boolean;
  clearEnumError(): void;
  getEnumError(): google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumErrorMap[keyof google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumErrorMap];
  setEnumError(value: google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumErrorMap[keyof google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumErrorMap]): void;

  hasKeywordPlanError(): boolean;
  clearKeywordPlanError(): void;
  getKeywordPlanError(): google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanErrorMap];
  setKeywordPlanError(value: google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanErrorMap]): void;

  hasKeywordPlanCampaignError(): boolean;
  clearKeywordPlanCampaignError(): void;
  getKeywordPlanCampaignError(): google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignErrorMap];
  setKeywordPlanCampaignError(value: google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignErrorMap]): void;

  hasKeywordPlanNegativeKeywordError(): boolean;
  clearKeywordPlanNegativeKeywordError(): void;
  getKeywordPlanNegativeKeywordError(): google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordErrorMap];
  setKeywordPlanNegativeKeywordError(value: google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordErrorMap]): void;

  hasKeywordPlanAdGroupError(): boolean;
  clearKeywordPlanAdGroupError(): void;
  getKeywordPlanAdGroupError(): google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupErrorMap];
  setKeywordPlanAdGroupError(value: google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupErrorMap]): void;

  hasKeywordPlanKeywordError(): boolean;
  clearKeywordPlanKeywordError(): void;
  getKeywordPlanKeywordError(): google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordErrorMap];
  setKeywordPlanKeywordError(value: google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordErrorMap]): void;

  hasKeywordPlanIdeaError(): boolean;
  clearKeywordPlanIdeaError(): void;
  getKeywordPlanIdeaError(): google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaErrorMap];
  setKeywordPlanIdeaError(value: google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaErrorMap]): void;

  hasAccountBudgetProposalError(): boolean;
  clearAccountBudgetProposalError(): void;
  getAccountBudgetProposalError(): google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalErrorMap[keyof google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalErrorMap];
  setAccountBudgetProposalError(value: google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalErrorMap[keyof google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalErrorMap]): void;

  hasUserListError(): boolean;
  clearUserListError(): void;
  getUserListError(): google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListErrorMap[keyof google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListErrorMap];
  setUserListError(value: google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListErrorMap[keyof google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListErrorMap]): void;

  hasChangeStatusError(): boolean;
  clearChangeStatusError(): void;
  getChangeStatusError(): google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusErrorMap[keyof google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusErrorMap];
  setChangeStatusError(value: google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusErrorMap[keyof google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusErrorMap]): void;

  hasFeedError(): boolean;
  clearFeedError(): void;
  getFeedError(): google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedErrorMap[keyof google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedErrorMap];
  setFeedError(value: google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedErrorMap[keyof google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedErrorMap]): void;

  hasGeoTargetConstantSuggestionError(): boolean;
  clearGeoTargetConstantSuggestionError(): void;
  getGeoTargetConstantSuggestionError(): google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionErrorMap[keyof google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionErrorMap];
  setGeoTargetConstantSuggestionError(value: google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionErrorMap[keyof google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionErrorMap]): void;

  hasCampaignDraftError(): boolean;
  clearCampaignDraftError(): void;
  getCampaignDraftError(): google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftErrorMap[keyof google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftErrorMap];
  setCampaignDraftError(value: google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftErrorMap[keyof google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftErrorMap]): void;

  hasFeedItemError(): boolean;
  clearFeedItemError(): void;
  getFeedItemError(): google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemErrorMap[keyof google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemErrorMap];
  setFeedItemError(value: google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemErrorMap[keyof google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemErrorMap]): void;

  hasLabelError(): boolean;
  clearLabelError(): void;
  getLabelError(): google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelErrorMap[keyof google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelErrorMap];
  setLabelError(value: google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelErrorMap[keyof google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelErrorMap]): void;

  hasBillingSetupError(): boolean;
  clearBillingSetupError(): void;
  getBillingSetupError(): google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupErrorMap[keyof google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupErrorMap];
  setBillingSetupError(value: google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupErrorMap[keyof google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupErrorMap]): void;

  hasCustomerClientLinkError(): boolean;
  clearCustomerClientLinkError(): void;
  getCustomerClientLinkError(): google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkErrorMap[keyof google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkErrorMap];
  setCustomerClientLinkError(value: google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkErrorMap[keyof google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkErrorMap]): void;

  hasCustomerManagerLinkError(): boolean;
  clearCustomerManagerLinkError(): void;
  getCustomerManagerLinkError(): google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkErrorMap[keyof google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkErrorMap];
  setCustomerManagerLinkError(value: google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkErrorMap[keyof google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkErrorMap]): void;

  hasFeedMappingError(): boolean;
  clearFeedMappingError(): void;
  getFeedMappingError(): google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingErrorMap[keyof google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingErrorMap];
  setFeedMappingError(value: google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingErrorMap[keyof google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingErrorMap]): void;

  hasCustomerFeedError(): boolean;
  clearCustomerFeedError(): void;
  getCustomerFeedError(): google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedErrorMap[keyof google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedErrorMap];
  setCustomerFeedError(value: google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedErrorMap[keyof google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedErrorMap]): void;

  hasAdGroupFeedError(): boolean;
  clearAdGroupFeedError(): void;
  getAdGroupFeedError(): google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedErrorMap[keyof google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedErrorMap];
  setAdGroupFeedError(value: google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedErrorMap[keyof google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedErrorMap]): void;

  hasCampaignFeedError(): boolean;
  clearCampaignFeedError(): void;
  getCampaignFeedError(): google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedErrorMap[keyof google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedErrorMap];
  setCampaignFeedError(value: google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedErrorMap[keyof google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedErrorMap]): void;

  hasCustomInterestError(): boolean;
  clearCustomInterestError(): void;
  getCustomInterestError(): google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestErrorMap[keyof google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestErrorMap];
  setCustomInterestError(value: google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestErrorMap[keyof google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestErrorMap]): void;

  hasCampaignExperimentError(): boolean;
  clearCampaignExperimentError(): void;
  getCampaignExperimentError(): google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentErrorMap[keyof google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentErrorMap];
  setCampaignExperimentError(value: google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentErrorMap[keyof google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentErrorMap]): void;

  hasExtensionFeedItemError(): boolean;
  clearExtensionFeedItemError(): void;
  getExtensionFeedItemError(): google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemErrorMap[keyof google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemErrorMap];
  setExtensionFeedItemError(value: google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemErrorMap[keyof google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemErrorMap]): void;

  hasAdParameterError(): boolean;
  clearAdParameterError(): void;
  getAdParameterError(): google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterErrorMap[keyof google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterErrorMap];
  setAdParameterError(value: google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterErrorMap[keyof google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterErrorMap]): void;

  hasFeedItemValidationError(): boolean;
  clearFeedItemValidationError(): void;
  getFeedItemValidationError(): google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap[keyof google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap];
  setFeedItemValidationError(value: google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap[keyof google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap]): void;

  hasExtensionSettingError(): boolean;
  clearExtensionSettingError(): void;
  getExtensionSettingError(): google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingErrorMap[keyof google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingErrorMap];
  setExtensionSettingError(value: google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingErrorMap[keyof google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingErrorMap]): void;

  hasFeedItemTargetError(): boolean;
  clearFeedItemTargetError(): void;
  getFeedItemTargetError(): google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetErrorMap[keyof google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetErrorMap];
  setFeedItemTargetError(value: google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetErrorMap[keyof google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetErrorMap]): void;

  hasPolicyViolationError(): boolean;
  clearPolicyViolationError(): void;
  getPolicyViolationError(): google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationErrorMap[keyof google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationErrorMap];
  setPolicyViolationError(value: google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationErrorMap[keyof google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationErrorMap]): void;

  hasMutateJobError(): boolean;
  clearMutateJobError(): void;
  getMutateJobError(): google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobErrorMap[keyof google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobErrorMap];
  setMutateJobError(value: google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobErrorMap[keyof google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobErrorMap]): void;

  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureErrorMap[keyof google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureErrorMap];
  setPartialFailureError(value: google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureErrorMap[keyof google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureErrorMap]): void;

  hasPolicyValidationParameterError(): boolean;
  clearPolicyValidationParameterError(): void;
  getPolicyValidationParameterError(): google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterErrorMap[keyof google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterErrorMap];
  setPolicyValidationParameterError(value: google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterErrorMap[keyof google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterErrorMap]): void;

  hasSizeLimitError(): boolean;
  clearSizeLimitError(): void;
  getSizeLimitError(): google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitErrorMap[keyof google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitErrorMap];
  setSizeLimitError(value: google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitErrorMap[keyof google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitErrorMap]): void;

  hasNotWhitelistedError(): boolean;
  clearNotWhitelistedError(): void;
  getNotWhitelistedError(): google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedErrorMap[keyof google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedErrorMap];
  setNotWhitelistedError(value: google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedErrorMap[keyof google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedErrorMap]): void;

  hasManagerLinkError(): boolean;
  clearManagerLinkError(): void;
  getManagerLinkError(): google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkErrorMap[keyof google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkErrorMap];
  setManagerLinkError(value: google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkErrorMap[keyof google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkErrorMap]): void;

  hasCurrencyCodeError(): boolean;
  clearCurrencyCodeError(): void;
  getCurrencyCodeError(): google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeErrorMap[keyof google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeErrorMap];
  setCurrencyCodeError(value: google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeErrorMap[keyof google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeErrorMap]): void;

  hasAccessInvitationError(): boolean;
  clearAccessInvitationError(): void;
  getAccessInvitationError(): google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationErrorMap[keyof google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationErrorMap];
  setAccessInvitationError(value: google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationErrorMap[keyof google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationErrorMap]): void;

  hasReachPlanError(): boolean;
  clearReachPlanError(): void;
  getReachPlanError(): google_ads_googleads_v2_errors_reach_plan_error_pb.ReachPlanErrorEnum.ReachPlanErrorMap[keyof google_ads_googleads_v2_errors_reach_plan_error_pb.ReachPlanErrorEnum.ReachPlanErrorMap];
  setReachPlanError(value: google_ads_googleads_v2_errors_reach_plan_error_pb.ReachPlanErrorEnum.ReachPlanErrorMap[keyof google_ads_googleads_v2_errors_reach_plan_error_pb.ReachPlanErrorEnum.ReachPlanErrorMap]): void;

  hasInvoiceError(): boolean;
  clearInvoiceError(): void;
  getInvoiceError(): google_ads_googleads_v2_errors_invoice_error_pb.InvoiceErrorEnum.InvoiceErrorMap[keyof google_ads_googleads_v2_errors_invoice_error_pb.InvoiceErrorEnum.InvoiceErrorMap];
  setInvoiceError(value: google_ads_googleads_v2_errors_invoice_error_pb.InvoiceErrorEnum.InvoiceErrorMap[keyof google_ads_googleads_v2_errors_invoice_error_pb.InvoiceErrorEnum.InvoiceErrorMap]): void;

  getErrorCodeCase(): ErrorCode.ErrorCodeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorCode): ErrorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorCode;
  static deserializeBinaryFromReader(message: ErrorCode, reader: jspb.BinaryReader): ErrorCode;
}

export namespace ErrorCode {
  export type AsObject = {
    requestError: google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestErrorMap[keyof google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestErrorMap],
    biddingStrategyError: google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyErrorMap[keyof google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyErrorMap],
    urlFieldError: google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldErrorMap[keyof google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldErrorMap],
    listOperationError: google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationErrorMap[keyof google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationErrorMap],
    queryError: google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryErrorMap[keyof google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryErrorMap],
    mutateError: google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateErrorMap[keyof google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateErrorMap],
    fieldMaskError: google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskErrorMap[keyof google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskErrorMap],
    authorizationError: google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationErrorMap[keyof google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationErrorMap],
    internalError: google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalErrorMap[keyof google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalErrorMap],
    quotaError: google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaErrorMap[keyof google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaErrorMap],
    adError: google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdErrorMap[keyof google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdErrorMap],
    adGroupError: google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupErrorMap[keyof google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupErrorMap],
    campaignBudgetError: google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetErrorMap[keyof google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetErrorMap],
    campaignError: google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignErrorMap[keyof google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignErrorMap],
    authenticationError: google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationErrorMap[keyof google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationErrorMap],
    adGroupCriterionError: google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionErrorMap[keyof google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionErrorMap],
    adCustomizerError: google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerErrorMap[keyof google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerErrorMap],
    adGroupAdError: google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdErrorMap[keyof google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdErrorMap],
    adSharingError: google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingErrorMap[keyof google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingErrorMap],
    adxError: google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxErrorMap[keyof google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxErrorMap],
    assetError: google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetErrorMap[keyof google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetErrorMap],
    biddingError: google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingErrorMap[keyof google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingErrorMap],
    campaignCriterionError: google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionErrorMap[keyof google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionErrorMap],
    collectionSizeError: google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeErrorMap[keyof google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeErrorMap],
    countryCodeError: google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeErrorMap[keyof google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeErrorMap],
    criterionError: google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionErrorMap[keyof google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionErrorMap],
    customerError: google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerErrorMap[keyof google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerErrorMap],
    dateError: google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateErrorMap[keyof google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateErrorMap],
    dateRangeError: google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeErrorMap[keyof google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeErrorMap],
    distinctError: google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctErrorMap[keyof google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctErrorMap],
    feedAttributeReferenceError: google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceErrorMap[keyof google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceErrorMap],
    functionError: google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionErrorMap[keyof google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionErrorMap],
    functionParsingError: google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingErrorMap[keyof google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingErrorMap],
    idError: google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdErrorMap[keyof google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdErrorMap],
    imageError: google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageErrorMap[keyof google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageErrorMap],
    languageCodeError: google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeErrorMap[keyof google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeErrorMap],
    mediaBundleError: google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleErrorMap[keyof google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleErrorMap],
    mediaUploadError: google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadErrorMap[keyof google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadErrorMap],
    mediaFileError: google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileErrorMap[keyof google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileErrorMap],
    multiplierError: google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierErrorMap[keyof google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierErrorMap],
    newResourceCreationError: google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationErrorMap[keyof google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationErrorMap],
    notEmptyError: google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyErrorMap[keyof google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyErrorMap],
    nullError: google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullErrorMap[keyof google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullErrorMap],
    operatorError: google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorErrorMap[keyof google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorErrorMap],
    rangeError: google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeErrorMap[keyof google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeErrorMap],
    recommendationError: google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationErrorMap[keyof google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationErrorMap],
    regionCodeError: google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeErrorMap[keyof google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeErrorMap],
    settingError: google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingErrorMap[keyof google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingErrorMap],
    stringFormatError: google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatErrorMap[keyof google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatErrorMap],
    stringLengthError: google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthErrorMap[keyof google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthErrorMap],
    operationAccessDeniedError: google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedErrorMap[keyof google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedErrorMap],
    resourceAccessDeniedError: google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedErrorMap[keyof google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedErrorMap],
    resourceCountLimitExceededError: google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededErrorMap[keyof google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededErrorMap],
    youtubeVideoRegistrationError: google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationErrorMap[keyof google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationErrorMap],
    adGroupBidModifierError: google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierErrorMap[keyof google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierErrorMap],
    contextError: google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextErrorMap[keyof google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextErrorMap],
    fieldError: google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldErrorMap[keyof google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldErrorMap],
    sharedSetError: google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetErrorMap[keyof google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetErrorMap],
    sharedCriterionError: google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionErrorMap[keyof google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionErrorMap],
    campaignSharedSetError: google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetErrorMap[keyof google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetErrorMap],
    conversionActionError: google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionErrorMap[keyof google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionErrorMap],
    conversionAdjustmentUploadError: google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadErrorMap[keyof google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadErrorMap],
    conversionUploadError: google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadErrorMap[keyof google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadErrorMap],
    headerError: google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderErrorMap[keyof google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderErrorMap],
    databaseError: google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseErrorMap[keyof google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseErrorMap],
    policyFindingError: google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingErrorMap[keyof google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingErrorMap],
    enumError: google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumErrorMap[keyof google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumErrorMap],
    keywordPlanError: google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanErrorMap],
    keywordPlanCampaignError: google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignErrorMap],
    keywordPlanNegativeKeywordError: google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordErrorMap],
    keywordPlanAdGroupError: google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupErrorMap],
    keywordPlanKeywordError: google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordErrorMap],
    keywordPlanIdeaError: google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaErrorMap[keyof google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaErrorMap],
    accountBudgetProposalError: google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalErrorMap[keyof google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalErrorMap],
    userListError: google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListErrorMap[keyof google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListErrorMap],
    changeStatusError: google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusErrorMap[keyof google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusErrorMap],
    feedError: google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedErrorMap[keyof google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedErrorMap],
    geoTargetConstantSuggestionError: google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionErrorMap[keyof google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionErrorMap],
    campaignDraftError: google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftErrorMap[keyof google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftErrorMap],
    feedItemError: google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemErrorMap[keyof google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemErrorMap],
    labelError: google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelErrorMap[keyof google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelErrorMap],
    billingSetupError: google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupErrorMap[keyof google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupErrorMap],
    customerClientLinkError: google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkErrorMap[keyof google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkErrorMap],
    customerManagerLinkError: google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkErrorMap[keyof google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkErrorMap],
    feedMappingError: google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingErrorMap[keyof google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingErrorMap],
    customerFeedError: google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedErrorMap[keyof google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedErrorMap],
    adGroupFeedError: google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedErrorMap[keyof google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedErrorMap],
    campaignFeedError: google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedErrorMap[keyof google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedErrorMap],
    customInterestError: google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestErrorMap[keyof google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestErrorMap],
    campaignExperimentError: google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentErrorMap[keyof google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentErrorMap],
    extensionFeedItemError: google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemErrorMap[keyof google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemErrorMap],
    adParameterError: google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterErrorMap[keyof google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterErrorMap],
    feedItemValidationError: google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap[keyof google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap],
    extensionSettingError: google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingErrorMap[keyof google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingErrorMap],
    feedItemTargetError: google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetErrorMap[keyof google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetErrorMap],
    policyViolationError: google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationErrorMap[keyof google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationErrorMap],
    mutateJobError: google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobErrorMap[keyof google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobErrorMap],
    partialFailureError: google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureErrorMap[keyof google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureErrorMap],
    policyValidationParameterError: google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterErrorMap[keyof google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterErrorMap],
    sizeLimitError: google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitErrorMap[keyof google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitErrorMap],
    notWhitelistedError: google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedErrorMap[keyof google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedErrorMap],
    managerLinkError: google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkErrorMap[keyof google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkErrorMap],
    currencyCodeError: google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeErrorMap[keyof google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeErrorMap],
    accessInvitationError: google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationErrorMap[keyof google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationErrorMap],
    reachPlanError: google_ads_googleads_v2_errors_reach_plan_error_pb.ReachPlanErrorEnum.ReachPlanErrorMap[keyof google_ads_googleads_v2_errors_reach_plan_error_pb.ReachPlanErrorEnum.ReachPlanErrorMap],
    invoiceError: google_ads_googleads_v2_errors_invoice_error_pb.InvoiceErrorEnum.InvoiceErrorMap[keyof google_ads_googleads_v2_errors_invoice_error_pb.InvoiceErrorEnum.InvoiceErrorMap],
  }

  export enum ErrorCodeCase {
    ERROR_CODE_NOT_SET = 0,
    REQUEST_ERROR = 1,
    BIDDING_STRATEGY_ERROR = 2,
    URL_FIELD_ERROR = 3,
    LIST_OPERATION_ERROR = 4,
    QUERY_ERROR = 5,
    MUTATE_ERROR = 7,
    FIELD_MASK_ERROR = 8,
    AUTHORIZATION_ERROR = 9,
    INTERNAL_ERROR = 10,
    QUOTA_ERROR = 11,
    AD_ERROR = 12,
    AD_GROUP_ERROR = 13,
    CAMPAIGN_BUDGET_ERROR = 14,
    CAMPAIGN_ERROR = 15,
    AUTHENTICATION_ERROR = 17,
    AD_GROUP_CRITERION_ERROR = 18,
    AD_CUSTOMIZER_ERROR = 19,
    AD_GROUP_AD_ERROR = 21,
    AD_SHARING_ERROR = 24,
    ADX_ERROR = 25,
    ASSET_ERROR = 107,
    BIDDING_ERROR = 26,
    CAMPAIGN_CRITERION_ERROR = 29,
    COLLECTION_SIZE_ERROR = 31,
    COUNTRY_CODE_ERROR = 109,
    CRITERION_ERROR = 32,
    CUSTOMER_ERROR = 90,
    DATE_ERROR = 33,
    DATE_RANGE_ERROR = 34,
    DISTINCT_ERROR = 35,
    FEED_ATTRIBUTE_REFERENCE_ERROR = 36,
    FUNCTION_ERROR = 37,
    FUNCTION_PARSING_ERROR = 38,
    ID_ERROR = 39,
    IMAGE_ERROR = 40,
    LANGUAGE_CODE_ERROR = 110,
    MEDIA_BUNDLE_ERROR = 42,
    MEDIA_UPLOAD_ERROR = 116,
    MEDIA_FILE_ERROR = 86,
    MULTIPLIER_ERROR = 44,
    NEW_RESOURCE_CREATION_ERROR = 45,
    NOT_EMPTY_ERROR = 46,
    NULL_ERROR = 47,
    OPERATOR_ERROR = 48,
    RANGE_ERROR = 49,
    RECOMMENDATION_ERROR = 58,
    REGION_CODE_ERROR = 51,
    SETTING_ERROR = 52,
    STRING_FORMAT_ERROR = 53,
    STRING_LENGTH_ERROR = 54,
    OPERATION_ACCESS_DENIED_ERROR = 55,
    RESOURCE_ACCESS_DENIED_ERROR = 56,
    RESOURCE_COUNT_LIMIT_EXCEEDED_ERROR = 57,
    YOUTUBE_VIDEO_REGISTRATION_ERROR = 117,
    AD_GROUP_BID_MODIFIER_ERROR = 59,
    CONTEXT_ERROR = 60,
    FIELD_ERROR = 61,
    SHARED_SET_ERROR = 62,
    SHARED_CRITERION_ERROR = 63,
    CAMPAIGN_SHARED_SET_ERROR = 64,
    CONVERSION_ACTION_ERROR = 65,
    CONVERSION_ADJUSTMENT_UPLOAD_ERROR = 115,
    CONVERSION_UPLOAD_ERROR = 111,
    HEADER_ERROR = 66,
    DATABASE_ERROR = 67,
    POLICY_FINDING_ERROR = 68,
    ENUM_ERROR = 70,
    KEYWORD_PLAN_ERROR = 71,
    KEYWORD_PLAN_CAMPAIGN_ERROR = 72,
    KEYWORD_PLAN_NEGATIVE_KEYWORD_ERROR = 73,
    KEYWORD_PLAN_AD_GROUP_ERROR = 74,
    KEYWORD_PLAN_KEYWORD_ERROR = 75,
    KEYWORD_PLAN_IDEA_ERROR = 76,
    ACCOUNT_BUDGET_PROPOSAL_ERROR = 77,
    USER_LIST_ERROR = 78,
    CHANGE_STATUS_ERROR = 79,
    FEED_ERROR = 80,
    GEO_TARGET_CONSTANT_SUGGESTION_ERROR = 81,
    CAMPAIGN_DRAFT_ERROR = 82,
    FEED_ITEM_ERROR = 83,
    LABEL_ERROR = 84,
    BILLING_SETUP_ERROR = 87,
    CUSTOMER_CLIENT_LINK_ERROR = 88,
    CUSTOMER_MANAGER_LINK_ERROR = 91,
    FEED_MAPPING_ERROR = 92,
    CUSTOMER_FEED_ERROR = 93,
    AD_GROUP_FEED_ERROR = 94,
    CAMPAIGN_FEED_ERROR = 96,
    CUSTOM_INTEREST_ERROR = 97,
    CAMPAIGN_EXPERIMENT_ERROR = 98,
    EXTENSION_FEED_ITEM_ERROR = 100,
    AD_PARAMETER_ERROR = 101,
    FEED_ITEM_VALIDATION_ERROR = 102,
    EXTENSION_SETTING_ERROR = 103,
    FEED_ITEM_TARGET_ERROR = 104,
    POLICY_VIOLATION_ERROR = 105,
    MUTATE_JOB_ERROR = 108,
    PARTIAL_FAILURE_ERROR = 112,
    POLICY_VALIDATION_PARAMETER_ERROR = 114,
    SIZE_LIMIT_ERROR = 118,
    NOT_WHITELISTED_ERROR = 120,
    MANAGER_LINK_ERROR = 121,
    CURRENCY_CODE_ERROR = 122,
    ACCESS_INVITATION_ERROR = 124,
    REACH_PLAN_ERROR = 125,
    INVOICE_ERROR = 126,
  }
}

export class ErrorLocation extends jspb.Message {
  clearFieldPathElementsList(): void;
  getFieldPathElementsList(): Array<ErrorLocation.FieldPathElement>;
  setFieldPathElementsList(value: Array<ErrorLocation.FieldPathElement>): void;
  addFieldPathElements(value?: ErrorLocation.FieldPathElement, index?: number): ErrorLocation.FieldPathElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorLocation): ErrorLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorLocation;
  static deserializeBinaryFromReader(message: ErrorLocation, reader: jspb.BinaryReader): ErrorLocation;
}

export namespace ErrorLocation {
  export type AsObject = {
    fieldPathElementsList: Array<ErrorLocation.FieldPathElement.AsObject>,
  }

  export class FieldPathElement extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): void;

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIndex(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldPathElement.AsObject;
    static toObject(includeInstance: boolean, msg: FieldPathElement): FieldPathElement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldPathElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldPathElement;
    static deserializeBinaryFromReader(message: FieldPathElement, reader: jspb.BinaryReader): FieldPathElement;
  }

  export namespace FieldPathElement {
    export type AsObject = {
      fieldName: string,
      index?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }
}

export class ErrorDetails extends jspb.Message {
  getUnpublishedErrorCode(): string;
  setUnpublishedErrorCode(value: string): void;

  hasPolicyViolationDetails(): boolean;
  clearPolicyViolationDetails(): void;
  getPolicyViolationDetails(): PolicyViolationDetails | undefined;
  setPolicyViolationDetails(value?: PolicyViolationDetails): void;

  hasPolicyFindingDetails(): boolean;
  clearPolicyFindingDetails(): void;
  getPolicyFindingDetails(): PolicyFindingDetails | undefined;
  setPolicyFindingDetails(value?: PolicyFindingDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetails): ErrorDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetails;
  static deserializeBinaryFromReader(message: ErrorDetails, reader: jspb.BinaryReader): ErrorDetails;
}

export namespace ErrorDetails {
  export type AsObject = {
    unpublishedErrorCode: string,
    policyViolationDetails?: PolicyViolationDetails.AsObject,
    policyFindingDetails?: PolicyFindingDetails.AsObject,
  }
}

export class PolicyViolationDetails extends jspb.Message {
  getExternalPolicyDescription(): string;
  setExternalPolicyDescription(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): google_ads_googleads_v2_common_policy_pb.PolicyViolationKey | undefined;
  setKey(value?: google_ads_googleads_v2_common_policy_pb.PolicyViolationKey): void;

  getExternalPolicyName(): string;
  setExternalPolicyName(value: string): void;

  getIsExemptible(): boolean;
  setIsExemptible(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyViolationDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyViolationDetails): PolicyViolationDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyViolationDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyViolationDetails;
  static deserializeBinaryFromReader(message: PolicyViolationDetails, reader: jspb.BinaryReader): PolicyViolationDetails;
}

export namespace PolicyViolationDetails {
  export type AsObject = {
    externalPolicyDescription: string,
    key?: google_ads_googleads_v2_common_policy_pb.PolicyViolationKey.AsObject,
    externalPolicyName: string,
    isExemptible: boolean,
  }
}

export class PolicyFindingDetails extends jspb.Message {
  clearPolicyTopicEntriesList(): void;
  getPolicyTopicEntriesList(): Array<google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry>;
  setPolicyTopicEntriesList(value: Array<google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry>): void;
  addPolicyTopicEntries(value?: google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry, index?: number): google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyFindingDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyFindingDetails): PolicyFindingDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyFindingDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyFindingDetails;
  static deserializeBinaryFromReader(message: PolicyFindingDetails, reader: jspb.BinaryReader): PolicyFindingDetails;
}

export namespace PolicyFindingDetails {
  export type AsObject = {
    policyTopicEntriesList: Array<google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry.AsObject>,
  }
}

